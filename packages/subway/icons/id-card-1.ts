import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayIdCard1Icon],svg[subway-id-card-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.7 64H384v85.3h42.7zM128 64H85.3v85.3H128zm341.3 42.7H448v64h-85.3v-64H149.3v64H64v-64H42.7C19.1 106.7 0 125.8 0 149.3v256C0 428.9 19.1 448 42.7 448h426.7c23.5 0 42.7-19.1 42.7-42.7v-256c-.1-23.5-19.2-42.6-42.8-42.6M192 384H42.7V234.7H192zm149.3-21.3H234.7V320h106.7v42.7zm128-64H234.7V256h234.7v42.7z"></svg:path>`,
})
export class SubwayIdCard1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
