import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDressIcon],svg[twemoji-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#55ACEE" d="M22.42 11.847L26 2s-.398.002-1 .034V0h-2v2.219c-2.271.302-5 1.028-5 2.781c0-1.753-2.729-2.479-5-2.781V0h-2v2.034C10.398 2.002 10 2 10 2l3.581 9.847L1 25.643S7 36 18 36s17-10.357 17-10.357z"></svg:path><svg:path fill="#BBDDF5" d="M13 11h10v2H13z"></svg:path><svg:path fill="#3B88C3" d="M15 13s-6.734 8.106-5.051 9.006C11.633 22.907 15 13 15 13m6.096 0s6.734 8.105 5.051 9.007c-1.684.9-5.051-9.007-5.051-9.007M18 13s-2 11 0 11s0-11 0-11"></svg:path>`,
})
export class TwemojiDressIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
