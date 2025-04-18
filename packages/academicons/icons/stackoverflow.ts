import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[academiconsStackoverflowIcon],svg[academicons-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.083 64l-27.489 20.396l101.987 137.46l27.488-20.396Zm-63.404 54.986l-21.73 26.155l131.693 109.53l21.729-26.164zm-50.552 70.947l-14.186 31.481l155.197 72.272l14.186-31.039zm-29.264 77.599l-7.093 33.698l167.608 35.032l7.093-33.707zm-78.932 43.45V448h308.177V310.981h-34.14v102.88H64.079V310.98Zm68.288 34.148v34.14h171.159v-34.14z"></svg:path>`,
})
export class AcademiconsStackoverflowIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
