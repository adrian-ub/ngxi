import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPatch24FilledIcon],svg[fluent-patch-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.798 3.237l1.495 1.495l-6.561 6.56l-1.495-1.494a3.25 3.25 0 0 1 0-4.596l1.965-1.965a3.25 3.25 0 0 1 4.596 0M14.2 20.762l-1.494-1.495l6.56-6.56l1.495 1.494a3.25 3.25 0 0 1 0 4.597l-1.964 1.964a3.25 3.25 0 0 1-4.596 0m-10.964-6.56a3.25 3.25 0 0 0 0 4.596l1.965 1.964a3.25 3.25 0 0 0 4.596 0L20.762 9.798a3.25 3.25 0 0 0 0-4.596l-1.964-1.965a3.25 3.25 0 0 0-4.596 0zM12.75 9a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9 12.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m3 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M12 15.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class FluentPatch24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
