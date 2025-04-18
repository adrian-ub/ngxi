import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSupabaseIcon],svg[lineicons-supabase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="lineiconsSupabase0" fill="currentColor" d="M13.644 21.668c-.511.643-1.547.29-1.56-.531l-.18-12.016h8.08c1.463 0 2.28 1.69 1.37 2.836z"></svg:path></svg:defs><svg:use href="#lineiconsSupabase0"></svg:use><svg:use href="#lineiconsSupabase0"></svg:use><svg:path fill="currentColor" d="M10.357 2.332c.511-.643 1.547-.29 1.56.531l.079 12.016h-7.98c-1.463 0-2.279-1.69-1.369-2.836z"></svg:path>`,
})
export class LineiconsSupabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
