import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsTwitchFillIcon],svg[akar-icons-twitch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1zm18.39 12.478L17.5 16.76H12l-2.922 2.791v-2.79h-4.64V2.97h16.499zM17.5 6.747v5.74h-2.063v-5.74zm-5.5 0v5.74H9.938v-5.74z" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsTwitchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
