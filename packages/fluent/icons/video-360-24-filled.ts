import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideo36024FilledIcon],svg[fluent-video-360-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.692 4.017C3.318 3.824 2 4.875 2 6.316v11.369c0 1.44 1.318 2.49 2.691 2.298q.296-.042.636-.084a54 54 0 0 1 6.673-.4c3.19 0 5.732.263 7.31.484c1.372.192 2.69-.858 2.69-2.299V6.317c0-1.441-1.318-2.492-2.692-2.3c-1.576.222-4.116.484-7.308.484c-3.191 0-5.732-.262-7.308-.483M19 18.428a52 52 0 0 0-3.5-.324V15H18a1 1 0 0 1 1 1zm-5-.395a59 59 0 0 0-4 0V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm-5.5.07a52 52 0 0 0-3.5.325V16a1 1 0 0 1 1-1h2.5zM12 13a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-3.5-.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentVideo36024FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
