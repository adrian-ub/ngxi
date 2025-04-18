import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderJunk28FilledIcon],svg[fluent-folder-junk-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.5 15a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm3.31 3.252l-5.558 5.557a4 4 0 0 0 5.557-5.557zM23.75 6.5a2.25 2.25 0 0 1 2.229 1.938l.016.158l.005.154v7.06A6.5 6.5 0 0 0 16.023 24H4.25a2.25 2.25 0 0 1-2.245-2.096L2 21.75V10.499l8.207.001l.196-.009a2.25 2.25 0 0 0 1.088-.393l.156-.12L15.821 6.5h7.929zm-2.25 10a4 4 0 0 0-3.31 6.248l5.558-5.557A3.981 3.981 0 0 0 21.5 16.5zM10.207 4c.46 0 .908.141 1.284.402l.156.12l2.103 1.751l-3.063 2.553l-.085.061a.75.75 0 0 1-.29.106L10.206 9L2 8.999V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h5.957z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentFolderJunk28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
