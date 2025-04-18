import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeMediaencoderIcon],svg[file-icons-adobe-mediaencoder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h512v512H0zm193.164 125.673h-32.582V93.09h32.582zm162.909 32.582H323.49v-32.582h32.582zm-65.164 0h-32.582v-32.582h32.582zm-97.745 0v-32.582h32.581v32.582zm32.581 32.581v-32.581h32.582v32.581zm195.491 0v32.582h-32.581v-32.582zm-65.163 32.582H323.49v-32.582h32.582zm-97.746 0v-32.582h32.582v32.582zM290.91 256v-32.582h32.582V256zm97.746 0h32.581v32.582h-32.581zm-65.164 32.582V256h32.582v32.582zm32.582 0h32.582v32.582h-32.582zm32.582 65.163v-32.581h32.581v32.581zm-32.582 0h32.582v32.582h32.581v32.582H90.764V93.091H128v32.582h32.582v32.582h32.582v32.581h32.581v32.582h32.582V256h32.582v32.582h32.582v32.582h32.582z" clip-rule="evenodd"></svg:path>`,
})
export class FileIconsAdobeMediaencoderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
