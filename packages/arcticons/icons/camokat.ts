import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCamokatIcon],svg[arcticons-camokat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 25.964c0 8.6-6.972 15.572-15.572 15.572s-15.572-6.972-15.572-15.572H4.5c0-10.77 8.73-19.5 19.5-19.5s19.5 8.73 19.5 19.5"></svg:path><svg:circle cx="27.928" cy="25.964" r="6.599" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCamokatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
