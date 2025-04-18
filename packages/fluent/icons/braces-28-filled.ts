import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBraces28FilledIcon],svg[fluent-braces-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3a3.497 3.497 0 0 0-3.497 3.497V11c0 .524-.016.792-.146 1.052c-.12.24-.417.61-1.304 1.053a1 1 0 0 0 0 1.79c.883.441 1.16.8 1.283 1.078c.15.342.167.756.167 1.592v3.938A3.497 3.497 0 0 0 7.5 25a1 1 0 1 0 0-2c-.827 0-1.497-.67-1.497-1.497v-4.026c0-.71 0-1.541-.336-2.309a3.4 3.4 0 0 0-.854-1.164c.367-.324.64-.673.832-1.056c.359-.715.358-1.422.358-1.899V6.497C6.003 5.67 6.673 5 7.5 5a1 1 0 0 0 0-2m13 0a3.497 3.497 0 0 1 3.497 3.497V11c0 .524.015.792.146 1.052c.12.24.417.61 1.304 1.053a1 1 0 0 1 0 1.79c-.883.441-1.16.8-1.283 1.078c-.15.342-.167.756-.167 1.592v3.938A3.497 3.497 0 0 1 20.5 25a1 1 0 1 1 0-2c.827 0 1.497-.67 1.497-1.497v-4.026c0-.71 0-1.541.336-2.309a3.4 3.4 0 0 1 .854-1.164a3.5 3.5 0 0 1-.832-1.056c-.359-.715-.358-1.422-.358-1.899V6.497C21.997 5.67 21.327 5 20.5 5a1 1 0 1 1 0-2"></svg:path>`,
})
export class FluentBraces28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
