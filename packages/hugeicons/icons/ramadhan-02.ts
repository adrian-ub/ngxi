import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRamadhan02Icon],svg[hugeicons-ramadhan-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.072 15C-.346 7 10.012 5 12 2c1.988 3 12.347 5 5.927 13v3c0 1.886 0 2.828-.579 3.414c-.578.586-1.51.586-3.372.586h-3.952c-1.863 0-2.794 0-3.372-.586c-.579-.585-.58-1.528-.58-3.413z"></svg:path><svg:path d="m11 19l.299-.217c1.614-1.174 2.422-1.76 3.34-1.782q.163-.005.327.01C15.844 17.088 16.5 18 17.5 19m-11 0c1.5-1 2.169-1.975 3.18-2q.182-.003.361.012c.634.057 1.204.36 1.959.933m3-5.511A3.23 3.23 0 1 1 10.566 8M14 9h.009"></svg:path></svg:g>`,
})
export class HugeiconsRamadhan02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
