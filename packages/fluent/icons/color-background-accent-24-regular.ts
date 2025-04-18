import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBackgroundAccent24RegularIcon],svg[fluent-color-background-accent-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.5v-4.088L4.488 14.9a3 3 0 0 0 4.243 0l1.37-1.37c-.062.265-.101.55-.101.845C10 16.232 11.394 18 13.5 18s3.5-1.768 3.5-3.625c0-.693-.214-1.32-.433-1.798a8 8 0 0 0-.77-1.3a11 11 0 0 0-.713-.891l-.008-.01l-.325-.35l-.014-.013a1.74 1.74 0 0 0-1.047-.503a3 3 0 0 0-.717-3.096L11.56 5h7.94A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5"></svg:path>`,
})
export class FluentColorBackgroundAccent24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
