import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConsoleIcon],svg[hugeicons-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.61 18.105A3.375 3.375 0 0 0 18.625 12h-.251a3.375 3.375 0 0 0-1.984 6.105m4.218 0a3.36 3.36 0 0 1-1.984.645h-.25a3.36 3.36 0 0 1-1.984-.645m4.218 0l.583 1.835c.222.7.334 1.05.303 1.268c-.063.454-.433.79-.87.792c-.21 0-.524-.164-1.153-.494c-.27-.142-.404-.212-.542-.254a1.5 1.5 0 0 0-.86 0c-.138.042-.273.112-.542.254c-.629.33-.943.495-1.153.494c-.437-.002-.807-.338-.87-.792c-.03-.218.08-.568.303-1.268l.583-1.835M13 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M20 9.131C19.13 5.057 15.475 2 11.098 2C6.073 2 2 6.03 2 11s4.073 9 9.098 9q.716 0 1.402-.106m4.863-15.258l-2.121 2.121m-8.484 8.485l-2.122 2.121"></svg:path></svg:g>`,
})
export class HugeiconsConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
