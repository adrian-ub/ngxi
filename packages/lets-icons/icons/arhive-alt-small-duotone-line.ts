import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallDuotoneLineIcon],svg[lets-icons-arhive-alt-small-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16.5 11.5h4v4l-1 1h-15l-1-1v-4h4l1 2h7z"></svg:path><svg:path stroke="currentColor" d="M5.774 7.984c.27-.18.405-.27.55-.334a1.8 1.8 0 0 1 .405-.122c.157-.028.319-.028.643-.028h9.256c.324 0 .486 0 .643.028q.21.038.404.122c.146.064.28.154.55.334l.992.661c.47.313.704.469.874.675a1.8 1.8 0 0 1 .331.62c.078.256.078.538.078 1.101v2.579c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H6.38c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787c-.196-.385-.196-.889-.196-1.897v-2.579c0-.563 0-.845.078-1.1a1.8 1.8 0 0 1 .331-.62c.17-.207.405-.363.873-.676z"></svg:path><svg:path stroke="currentColor" d="M20.5 11.5h-2.882c-.485 0-.728 0-.933.099q-.096.045-.18.11c-.18.14-.288.357-.505.791s-.325.65-.505.79q-.084.065-.18.111c-.205.099-.448.099-.933.099H9.618c-.485 0-.728 0-.933-.099a1 1 0 0 1-.18-.11c-.18-.14-.288-.357-.505-.791s-.325-.65-.505-.79a1 1 0 0 0-.18-.111c-.205-.099-.448-.099-.933-.099H3.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
