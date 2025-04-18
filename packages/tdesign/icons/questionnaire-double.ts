import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireDoubleIcon],svg[tdesign-questionnaire-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h19v14H5.82L1 19.443zm2 2v11.557L5.18 14H18V4zm20.5.5v18.443L18.68 19.5H7.5v-2h11.82l2.18 1.557V4.5z"></svg:path><svg:path fill="currentColor" d="M10.5 6.5a1 1 0 0 0-1 1v1h-2v-1a3 3 0 0 1 6 0c0 .676-.172 1.246-.474 1.71a2.96 2.96 0 0 1-1.029.95a4 4 0 0 1-.494.238v.352h-2v-1c0-.424.245-.687.361-.79c.12-.105.24-.165.296-.192c.107-.05.233-.094.309-.12l.018-.007c.19-.066.36-.127.52-.218a.96.96 0 0 0 .343-.305c.072-.11.15-.294.15-.618a1 1 0 0 0-1-1m-1 5h2.004v2.004H9.5z"></svg:path>`,
})
export class TdesignQuestionnaireDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
