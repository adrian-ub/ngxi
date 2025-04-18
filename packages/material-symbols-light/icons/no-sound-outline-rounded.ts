import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoSoundOutlineRoundedIcon],svg[material-symbols-light-no-sound-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.385 12.708l-2.247 2.246q-.14.14-.344.15t-.363-.15t-.16-.354t.16-.354L16.677 12l-2.246-2.246q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l2.246 2.246l2.246-2.246q.14-.14.344-.15t.364.15t.159.354t-.16.354L18.093 12l2.247 2.246q.14.14.15.344t-.15.364t-.354.16t-.354-.16zM7.73 14H5.116q-.349 0-.578-.23t-.23-.578v-2.384q0-.348.23-.578t.578-.23H7.73l2.685-2.685q.244-.244.568-.116t.324.476v8.65q0 .348-.324.476t-.568-.116zm2.577-5.15L8.158 11h-2.85v2h2.85l2.15 2.15zM7.808 12"></svg:path>`,
})
export class MaterialSymbolsLightNoSoundOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
