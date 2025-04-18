import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireIcon],svg[tdesign-questionnaire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zM12 7.5a1 1 0 0 0-1 1v1H9v-1a3 3 0 1 1 6 0c0 .676-.172 1.246-.474 1.71a2.96 2.96 0 0 1-1.029.95a4 4 0 0 1-.494.238v.352h-2v-1c0-.424.245-.687.361-.79c.12-.105.24-.165.296-.192c.107-.05.233-.094.309-.12l.018-.007c.19-.066.36-.127.52-.218a.96.96 0 0 0 .343-.305c.072-.11.15-.294.15-.618a1 1 0 0 0-1-1m-1 5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignQuestionnaireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
