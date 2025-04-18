import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindIcon],svg[mynaui-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.515 9.419C5.172 10.515 4.5 11.063 4.5 12s.672 1.485 2.015 2.582c.371.302.74.587 1.077.824c.297.209.633.424.98.635c1.341.816 2.011 1.223 2.613.772c.6-.451.655-1.396.765-3.285c.03-.535.05-1.058.05-1.528s-.02-.993-.05-1.528c-.11-1.89-.164-2.834-.765-3.285c-.602-.451-1.272-.044-2.612.771a18 18 0 0 0-.98.636c-.339.237-.707.522-1.078.825"></svg:path><svg:path d="M14.016 9.419C12.672 10.515 12 11.063 12 12s.672 1.485 2.015 2.582c.371.302.74.587 1.077.824c.297.209.633.424.98.635c1.341.816 2.011 1.223 2.613.772c.6-.451.655-1.396.765-3.285c.03-.535.05-1.058.05-1.528s-.02-.993-.05-1.528c-.11-1.89-.164-2.834-.765-3.285c-.602-.451-1.272-.044-2.612.771a18 18 0 0 0-.98.636a19 19 0 0 0-1.078.825"></svg:path></svg:g>`,
})
export class MynauiRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
