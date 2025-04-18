import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PlayReverseResumeIcon],svg[fluent-mdl2-play-reverse-resume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 256v1536h-128V256zM192 1024l1088-768v1536zm960-521l-738 521l738 521z"></svg:path>`,
})
export class FluentMdl2PlayReverseResumeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
