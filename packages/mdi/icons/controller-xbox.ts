import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiControllerXboxIcon],svg[mdi-controller-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path stroke-width=".2" stroke-linejoin="round" stroke="currentColor" d="M12 6.059c1.726 0 6.686-4.314 9.274.863C23.863 12.098 23.216 19 21.49 19c-4.313 0-1.725-4.314-9.49-4.314C4.235 14.686 6.824 19 2.51 19c-1.726 0-2.373-6.902.215-12.078c2.589-5.177 7.55-.863 9.275-.863zM12 7.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" fill="currentColor"></svg:path>`,
})
export class MdiControllerXboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
