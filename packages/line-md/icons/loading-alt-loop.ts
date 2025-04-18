import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdLoadingAltLoopIcon],svg[line-md-loading-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="3.5" r="1.5"><svg:animatetransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></svg:animatetransform><svg:animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="3.5" r="1.5" transform="rotate(30 12 12)"><svg:animatetransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></svg:animatetransform><svg:animate attributeName="opacity" begin="0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="3.5" r="1.5" transform="rotate(60 12 12)"><svg:animatetransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></svg:animatetransform><svg:animate attributeName="opacity" begin="0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"></svg:animate></svg:circle></svg:g>`,
})
export class LineMdLoadingAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
