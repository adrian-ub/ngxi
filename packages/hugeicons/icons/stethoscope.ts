import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStethoscopeIcon],svg[hugeicons-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.001 2c1.104 0 2 .931 2 2.08c0 .95.035 1.794-.732 2.492C11.76 8.857 10.503 10 9 10S6.242 8.857 3.731 6.572c-.767-.698-.73-1.543-.73-2.492C3 2.93 3.894 2 4.998 2M9 14v3.5a4.5 4.5 0 0 0 9 0V16"></svg:path><svg:path d="m14 7l-1.302 3.256c-.346.865-.52 1.298-.81 1.653c-.29.356-.678.612-1.456 1.126L8.97 14l-1.437-.968c-.76-.512-1.141-.768-1.425-1.12c-.283-.35-.454-.776-.794-1.628L4 7m17 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.992 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
