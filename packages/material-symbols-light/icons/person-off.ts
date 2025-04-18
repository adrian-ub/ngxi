import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPersonOffIcon],svg[material-symbols-light-person-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.833 21.26l-2.644-2.645H5V16.97q0-.619.36-1.158q.361-.54.97-.838q1.318-.632 2.635-.963t2.631-.371h.318q.163 0 .317.019l-9.49-9.49l.713-.714l17.092 17.092zm-1.74-6.075q.166.08.265.245q.098.164.103.355l-.772-.773l.204.08q.101.04.2.093m-4.412-4.316L9.516 6.704q.42-.639 1.075-.979q.653-.34 1.409-.34q1.246 0 2.123.876Q15 7.14 15 8.385q0 .756-.34 1.41t-.98 1.074"></svg:path>`,
})
export class MaterialSymbolsLightPersonOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
