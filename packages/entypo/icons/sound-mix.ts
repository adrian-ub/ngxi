import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSoundMixIcon],svg[entypo-sound-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.6c0-.553-.448-.6-1-.6c-.553 0-1 .047-1 .6V10h2zM3 18.4c0 .551.447.6 1 .6s1-.049 1-.6V15H3zM6.399 11h-4.8C1.046 11 1 11.448 1 12v1c0 .553.046 1 .599 1H6.4c.55 0 .6-.447.6-1v-1c0-.552-.05-1-.601-1m12 1h-4.801c-.552 0-.598.448-.598 1v1c0 .553.046 1 .599 1H18.4c.55 0 .6-.447.6-1v-1c0-.552-.05-1-.601-1M13 7c0-.552-.05-1-.601-1h-4.8C7.046 6 7 6.448 7 7v1c0 .553.046 1 .599 1H12.4c.55 0 .6-.447.6-1zm-2-5.4c0-.553-.448-.6-1-.6c-.553 0-1 .047-1 .6V5h2zM9 18.4c0 .551.447.6 1 .6s1-.049 1-.6V10H9zm8-16.8c0-.553-.448-.6-1-.6c-.553 0-1 .047-1 .6V11h2zm-2 16.8c0 .551.447.6 1 .6s1-.049 1-.6V16h-2z"></svg:path>`,
})
export class EntypoSoundMixIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
