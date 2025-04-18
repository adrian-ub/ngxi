import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMusicNote2Icon],svg[proicons-music-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 17.25a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 0v-9m0 0l4.83 2.415a1.5 1.5 0 0 0 2.17-1.342V7.177a1.5 1.5 0 0 0-.83-1.342l-4.723-2.361a1 1 0 0 0-1.447.894z"></svg:path>`,
})
export class ProiconsMusicNote2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
