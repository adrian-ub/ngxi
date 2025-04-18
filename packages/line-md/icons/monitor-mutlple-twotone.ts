import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMonitorMutlpleTwotoneIcon],svg[line-md-monitor-mutlple-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h4v0h-4Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 17h4v0h-4Z;M12 17h4v6h-4Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M14 18h-9v-12h18v12Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M14 22h3M14 22h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M1 14v-12h18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.4s" values="32;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdMonitorMutlpleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
