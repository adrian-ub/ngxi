import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCommandBoldIcon],svg[ph-command-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 140h-16v-24h16a40 40 0 1 0-40-40v16h-24V76a40 40 0 1 0-40 40h16v24H76a40 40 0 1 0 40 40v-16h24v16a40 40 0 1 0 40-40m-16-64a16 16 0 1 1 16 16h-16ZM60 76a16 16 0 0 1 32 0v16H76a16 16 0 0 1-16-16m32 104a16 16 0 1 1-16-16h16Zm24-64h24v24h-24Zm64 80a16 16 0 0 1-16-16v-16h16a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhCommandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
