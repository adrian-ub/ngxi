import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlaylistAddCheckCircleIcon],svg[material-symbols-playlist-add-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.05 18.375l4.975-4.975L17.6 12l-3.55 3.55l-1.4-1.425l-1.425 1.425zM7 15h3v-2H7zm0-3h7v-2H7zm0-3h7V7H7zm5 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsPlaylistAddCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
