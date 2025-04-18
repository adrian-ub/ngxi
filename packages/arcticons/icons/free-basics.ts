import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreeBasicsIcon],svg[arcticons-free-basics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.762 36.582c-2.992-2.64-4.84-6.423-4.84-10.646c0-5.455 3.168-10.206 7.743-12.582m7.567-1.408a14.005 14.005 0 0 1 12.845 13.99c0 7.742-6.334 14.077-14.077 14.077c-1.32 0-2.64-.176-3.871-.528M11.331 44.5l17.508-41"></svg:path>`,
})
export class ArcticonsFreeBasicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
