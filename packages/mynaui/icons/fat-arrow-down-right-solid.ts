import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownRightSolidIcon],svg[mynaui-fat-arrow-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.596 3.611c.512-.512 1.312-.456 1.786.018l6.51 6.51l2.54-2.601c.498-.498 1.165-.342 1.505-.167c.355.181.798.591.813 1.198v9.798c0 .267 0 .511-.017.715c-.018.22-.059.458-.178.692c-.171.336-.445.61-.781.781c-.235.12-.472.16-.692.178c-.204.017-.448.017-.716.017H8.57c-.607-.015-1.017-.458-1.198-.813c-.175-.34-.331-1.007.167-1.505l.006-.006l2.594-2.534l-6.51-6.51c-.473-.474-.529-1.274-.017-1.785z"></svg:path>`,
})
export class MynauiFatArrowDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
