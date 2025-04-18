import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1CircledInformationSourceIcon],svg[emojione-v1-circled-information-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1b75bb"><svg:path d="M31.891 0C14.307 0 0 14.307 0 31.891s14.307 31.891 31.891 31.891s31.891-14.307 31.891-31.891S49.475 0 31.891 0m0 55.877c-13.227 0-23.986-10.76-23.986-23.986S18.664 7.903 31.891 7.903s23.986 10.761 23.986 23.988s-10.76 23.986-23.986 23.986"></svg:path><svg:path d="M31.934 17.919c-1.101 0-2.05-.337-2.836-1.013q-1.178-1.017-1.178-2.881q-.002-1.688 1.206-2.777q1.208-1.094 2.808-1.094c1.027 0 1.942.328 2.736.99c.792.659 1.193 1.621 1.193 2.881c0 1.223-.39 2.174-1.166 2.868q-1.164 1.027-2.763 1.026m3.929 8.208v22.957c0 1.59-.382 2.793-1.137 3.608q-1.131 1.22-2.879 1.221c-1.748.001-2.113-.415-2.838-1.25q-1.092-1.252-1.09-3.579V26.362q-.002-2.359 1.09-3.551c.725-.797 1.674-1.189 2.838-1.189s2.126.392 2.879 1.189c.755.793 1.137 1.903 1.137 3.316"></svg:path></svg:g>`,
})
export class EmojioneV1CircledInformationSourceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
