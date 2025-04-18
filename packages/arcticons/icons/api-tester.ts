import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApiTesterIcon],svg[arcticons-api-tester-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-5 13.362v10.276"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.972 29.138V18.862h3.364c1.902 0 3.444 1.545 3.444 3.451s-1.542 3.451-3.444 3.451h-3.364m-3.792-.03h-4.553M14.5 29.138l3.404-10.276l3.404 10.276"></svg:path>`,
})
export class ArcticonsApiTesterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
