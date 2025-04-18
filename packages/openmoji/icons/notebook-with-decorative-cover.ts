import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNotebookWithDecorativeCoverIcon],svg[openmoji-notebook-with-decorative-cover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M17.563 12h42.438v47.5H17.563z"></svg:path><svg:path fill="#f1b31c" d="M12 12h5.948v47.5H12z"></svg:path><svg:path fill="#fff" d="M17.573 23.876H59.99v13.813H17.573z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13v46m45.909-4.185A1.99 1.99 0 0 0 64 53.047V9.083A2.083 2.083 0 0 0 61.917 7H16.459a4.77 4.77 0 0 0-3.973 2.13h0a1.889 1.889 0 0 0 1.573 2.935h3.808L20 12.047h39.917v48H14.058a1.89 1.89 0 0 1-1.891-1.85V10.575"></svg:path><svg:path d="M47.734 27.438h-3.826v6.695h3.826m-3.826-3.348h2.87M22.57 34.133v-6.695l4.782 6.695v-6.695m5.26 6.695a2.39 2.39 0 0 1-2.39-2.391v-1.913a2.39 2.39 0 0 1 2.39-2.39h0a2.39 2.39 0 0 1 2.391 2.39v1.913a2.39 2.39 0 0 1-2.39 2.39m21.857-5.364a2.04 2.04 0 0 0-2.06-1.336h0a1.925 1.925 0 0 0-2.102 1.674a1.925 1.925 0 0 0 2.102 1.673l-.043.006a1.925 1.925 0 0 1 2.102 1.674a1.925 1.925 0 0 1-2.102 1.674h0a2.04 2.04 0 0 1-2.059-1.337m-13.073-5.358h3.825m-1.912 0v6.695"></svg:path></svg:g>`,
})
export class OpenmojiNotebookWithDecorativeCoverIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
