import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallProhibited16FilledIcon],svg[fluent-call-prohibited-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.757 5.432l-.303-1.514l-.269-.05a7 7 0 0 0-1.18-.118c-.396 0-.833.057-1.18.118q-.15.026-.269.05l-.302 1.514A1.5 1.5 0 0 1 5.05 6.613l-.673.123A2 2 0 0 1 2.07 5.218l-.068-.294c-.26-1.128.157-2.394 1.312-2.918c1.068-.484 2.676-1 4.688-1.006a11.2 11.2 0 0 1 4.708 1.006c1.147.526 1.557 1.787 1.298 2.906l-.07.306a2 2 0 0 1-2.307 1.518l-.673-.123a1.5 1.5 0 0 1-1.202-1.181M8 15a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-1a3 3 0 0 0 2.445-4.738l-4.183 4.183c.49.35 1.09.555 1.738.555m-2.445-1.262l4.183-4.183a3 3 0 0 0-4.184 4.184"></svg:path>`,
})
export class FluentCallProhibited16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
