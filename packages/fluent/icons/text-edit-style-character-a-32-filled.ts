import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextEditStyleCharacterA32FilledIcon],svg[fluent-text-edit-style-character-a-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2c.502 0 .956.3 1.152.763l5.072 11.989l-1.908 1.907L12.48 13.5H6.52l-1.37 3.237a1.25 1.25 0 0 1-2.302-.974l5.5-13A1.25 1.25 0 0 1 9.5 2m1.922 9L9.5 6.458L7.58 11zm9.838.328a4.536 4.536 0 0 1 6.414 6.415l-9.418 9.417a4 4 0 0 1-1.73 1.018l-6.253 1.787a1 1 0 0 1-1.236-1.236l1.785-6.251a4 4 0 0 1 1.018-1.73z"></svg:path>`,
})
export class FluentTextEditStyleCharacterA32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
