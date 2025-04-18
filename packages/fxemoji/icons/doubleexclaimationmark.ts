import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiDoubleexclaimationmarkIcon],svg[fxemoji-doubleexclaimationmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2B3B47" d="M225.023 406.129c0 26.571-21.257 48.36-48.36 48.36s-48.36-21.789-48.36-48.36s21.257-48.36 48.36-48.36s48.36 21.789 48.36 48.36m-35.491-96.721H163.31c-11.857 0-21.617-9.324-22.159-21.168l-8.598-187.871c-.578-12.636 9.51-23.197 22.159-23.197h43.849c12.669 0 22.765 10.593 22.157 23.247L211.69 288.29c-.569 11.824-10.321 21.118-22.158 21.118m189.603 96.721c0 26.571-21.258 48.36-48.361 48.36s-48.36-21.789-48.36-48.36s21.258-48.36 48.36-48.36c27.103 0 48.361 21.789 48.361 48.36m-35.492-96.721h-26.222c-11.857 0-21.617-9.324-22.159-21.168l-8.598-187.871c-.578-12.636 9.51-23.196 22.159-23.196h43.848c12.669 0 22.765 10.593 22.157 23.247L365.8 288.291c-.568 11.823-10.32 21.117-22.157 21.117"></svg:path>`,
})
export class FxemojiDoubleexclaimationmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
