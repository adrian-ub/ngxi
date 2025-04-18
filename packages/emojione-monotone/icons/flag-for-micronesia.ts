import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForMicronesiaIcon],svg[emojione-monotone-flag-for-micronesia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m3.13 21.586l-2.366-1.794l-2.364 1.794l.896-2.917l-2.355-1.81l2.916-.01l.908-2.911l.908 2.911l2.918.01l-2.356 1.81zm-4.731 16.826l2.364 1.796l2.366-1.796l-.896 2.919l2.356 1.808l-2.918.01l-.908 2.911l-.908-2.911l-2.916-.01l2.355-1.808zm12.452-7.5l-.908 2.912l-.908-2.912l-2.915-.01l2.354-1.809l-.895-2.918l2.364 1.794l2.364-1.794l-.895 2.918l2.354 1.809zm-23.159-4.736l2.364 1.794l2.364-1.794l-.895 2.918l2.355 1.809l-2.916.01l-.909 2.912l-.908-2.912l-2.916-.01l2.354-1.809z"></svg:path>`,
})
export class EmojioneMonotoneFlagForMicronesiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
