import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCancel02Icon],svg[hugeicons-cancel-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.247 6.74c.826.827 1.24 1.24 1.753 1.24c.514 0 .927-.413 1.753-1.24h0l1.754-1.753h0c.407-.408.611-.612.823-.734c1.066-.616 1.945-.005 2.683.734c.739.738 1.35 1.617.734 2.683c-.122.212-.326.416-.734.823l-1.753 1.754c-.827.826-1.24 1.24-1.24 1.753c0 .514.413.927 1.24 1.753l1.753 1.754c.408.407.612.611.734.823c.616 1.066.005 1.945-.734 2.683c-.738.739-1.617 1.35-2.683.734c-.212-.122-.416-.326-.823-.734l-1.754-1.753h0c-.826-.826-1.24-1.24-1.753-1.24c-.514 0-.927.414-1.753 1.24h0l-1.754 1.753c-.407.408-.611.612-.823.734c-1.066.616-1.945.005-2.683-.734c-.739-.738-1.35-1.617-.734-2.683c.122-.212.326-.416.734-.823l1.753-1.754c.827-.826 1.24-1.24 1.24-1.753c0-.514-.414-.927-1.24-1.753L4.987 8.493c-.408-.407-.612-.611-.734-.823c-.616-1.066-.005-1.945.734-2.683c.738-.739 1.617-1.35 2.683-.734c.212.122.416.326.823.734h0z" color="currentColor"></svg:path>`,
})
export class HugeiconsCancel02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
