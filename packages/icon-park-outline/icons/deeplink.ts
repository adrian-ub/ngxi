import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDeeplinkIcon],svg[icon-park-outline-deeplink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M21 34.993v5.978c0 .569-.423 1.029-.944 1.029H4.944C4.423 42 4 41.54 4 40.971V7.03C4 6.46 4.423 6 4.944 6h15.112c.521 0 .944.46.944 1.029v5.978m6 0V7.03c0-.57.423-1.03.944-1.03h15.112c.521 0 .944.46.944 1.029V40.97c0 .569-.423 1.029-.944 1.029H27.944c-.521 0-.944-.46-.944-1.029v-5.978"></svg:path><svg:path fill="currentColor" d="M12.5 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4m23 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M16 23.5h16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m27.223 28.273l1.591-1.591l3.182-3.182l-3.182-3.182l-1.59-1.591"></svg:path></svg:g>`,
})
export class IconParkOutlineDeeplinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
