import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RubyGemsLogoIcon],svg[fluent-mdl2-ruby-gems-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M666 672h721l253 254q-154 155-306 307t-308 305L413 926zM1024 0l893 512v1024l-893 512l-893-512V512zm723 1438V608l-723-417l-723 417v830l723 417z"></svg:path>`,
})
export class FluentMdl2RubyGemsLogoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
