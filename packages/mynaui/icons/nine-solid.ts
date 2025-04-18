import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNineSolidIcon],svg[mynaui-nine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.875 7.75a2.375 2.375 0 0 1 2.375 2.375c0 .63-.24 1.026-.605 1.29c-.396.286-1.005.46-1.77.46s-1.374-.174-1.77-.46c-.364-.264-.605-.66-.605-1.29a2.375 2.375 0 0 1 2.375-2.375m2.375 5.058v.442a3 3 0 0 1-3 3H10a.75.75 0 0 0 0 1.5h1.25a4.5 4.5 0 0 0 4.5-4.5v-3.125a3.875 3.875 0 0 0-7.75 0c0 1.095.459 1.95 1.226 2.505c.734.532 1.688.745 2.649.745c.845 0 1.685-.165 2.375-.567"></svg:path>`,
})
export class MynauiNineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
