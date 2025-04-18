import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallSecureLightIcon],svg[lets-icons-arhive-alt-small-secure-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 14h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 14 6.454 14 5.93 14H3"></svg:path><svg:path stroke-linecap="round" d="M8 10H6.414a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 0-.293.707V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707l-2.414-2.414a1 1 0 0 0-.707-.293H16"></svg:path><svg:path d="M12 4c1.028 0 2.524.47 3.365.765a.96.96 0 0 1 .635.912v2.551a4 4 0 0 1-2.595 3.745l-1.054.395a1 1 0 0 1-.702 0l-1.053-.395A4 4 0 0 1 8 8.228V5.677a.96.96 0 0 1 .635-.912C9.475 4.469 10.972 4 12 4Z"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallSecureLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
