import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDocSearchIcon],svg[icon-park-doc-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path><svg:path fill="#2F88FF" d="M28 16C28 17.3807 27.4404 18.6307 26.5355 19.5355C25.6307 20.4404 24.3807 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 23L26.5355 19.5355M26.5355 19.5355C27.4404 18.6307 28 17.3807 28 16C28 13.2386 25.7614 11 23 11C20.2386 11 18 13.2386 18 16C18 18.7614 20.2386 21 23 21C24.3807 21 25.6307 20.4404 26.5355 19.5355Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 36H24"></svg:path></svg:g>`,
})
export class IconParkDocSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
