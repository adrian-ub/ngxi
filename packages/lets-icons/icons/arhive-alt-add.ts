import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltAddIcon],svg[lets-icons-arhive-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 12h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 12 6.454 12 5.93 12H3"></svg:path><svg:path stroke-linecap="round" d="m5 9l-1.707 1.707a1 1 0 0 0-.293.707V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707L19 9"></svg:path><svg:path d="m8.5 7l3.5 3m0 0l3.5-3M12 10V3"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
