import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCircuitJamIcon],svg[arcticons-circuit-jam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 26.5h-12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2m21 0h-12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2m-21-21h-12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2m14.612-.587l-9.015 6.312a2 2 0 0 0-.491 2.786l6.312 9.015a2 2 0 0 0 2.785.49l9.015-6.312a2 2 0 0 0 .491-2.785l-6.312-9.015a2 2 0 0 0-2.785-.491M36.5 38.5l-6-6m0 6l3-3m-1-5l6 6m0-6l-3 3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.407 12.957l2.573-2.141v4.909l2.928-3.792l.194 4.854l3.015-3.928l-.201 4.755l2.491-2.175M15.82 11.18L8.5 13.141l5.359 5.359zM13.141 8.5l5.359 5.359M9.5 30.5l2.855 7.303l4.448-4.448zm5.079 5.079L17.5 38.5"></svg:path>`,
})
export class ArcticonsCircuitJamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
