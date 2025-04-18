import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRemotemysqlIcon],svg[whh-remotemysql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 132v605l64 64q-145 95-318 95q-137 0-261-63l-6 12q73 74 73 179H0q0-106 75-181t181-75q30 0 62 8l11-21q-94-81-147.5-194.5T128 318q0-173 95-318l65 64h602l49-50q15-14 35-14t34.5 14.5T1023 49t-14 35zm-609-4l238 237l237-237zm545 68L658 435l238 238z"></svg:path>`,
})
export class WhhRemotemysqlIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
