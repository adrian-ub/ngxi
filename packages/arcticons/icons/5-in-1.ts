import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons5In1Icon],svg[arcticons-5-in-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.022 20.393l2.478-1.349v9.912m-25-.836c.684.574 1.348.836 3.007.836h.286a2.78 2.78 0 0 0 2.779-2.779h0a2.78 2.78 0 0 0-2.78-2.779H11.5v-4.354h6.072"></svg:path><svg:circle cx="23.565" cy="21.399" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.778 23.154l.507 4.173m4.768-.578l-.316-2.6a1.587 1.587 0 0 0-1.766-1.383h0c-.87.106-1.49.896-1.384 1.766m.316 2.599l-.507-4.174"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.513 20.09l11.956-1.452l1.126 9.272l-11.956 1.452z"></svg:path>`,
})
export class Arcticons5In1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
