import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailAltFilledIcon],svg[line-md-email-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 13l-8 -5v10h16v-10l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
