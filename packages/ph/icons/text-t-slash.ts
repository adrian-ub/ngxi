import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashIcon],svg[ph-text-t-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54L136 148.69V192h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-60.91l-56-61.6V88a8 8 0 0 1-16 0V56a8 8 0 0 1 .72-3.31l-6.64-7.31a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M105.79 64H120v16.43a8 8 0 0 0 16 0V64h56v24a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8h-94.21a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhTextTSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
