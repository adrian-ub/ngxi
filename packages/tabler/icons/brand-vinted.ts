import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandVintedIcon],svg[tabler-brand-vinted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.028 6c0 7.695-.292 11.728 0 12c2.046-5 4.246-12.642 5.252-14.099c.343-.497.768-.93 1.257-1.277c.603-.39 1.292-.76 1.463-.575c-.07 2.319-4.023 15.822-4.209 16.314a6.14 6.14 0 0 1-3.465 3.386c-3.213.78-3.429-.446-3.836-1.134C6.54 18.512 5.808 6.355 6.045 5c.05-.523.143-1.851 2.491-2c2.359-.354 2.547 1.404 2.492 3"></svg:path>`,
})
export class TablerBrandVintedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
