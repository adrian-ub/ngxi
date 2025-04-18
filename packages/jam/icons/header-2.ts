import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHeader2Icon],svg[jam-header-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm12.88 4.352V10H10V8.986l.1-.246l1.785-1.913c.43-.435.793-.77.923-1.011c.124-.23.182-.427.182-.587c0-.14-.04-.242-.127-.327a.47.47 0 0 0-.351-.127a.44.44 0 0 0-.355.158c-.105.117-.165.288-.173.525l-.012.338h-1.824l.016-.366c.034-.735.272-1.33.718-1.77S11.902 3 12.585 3q.637 0 1.14.275a2.1 2.1 0 0 1 .806.8q.299.516.3 1.063c0 .416-.23.849-.456 1.307c-.222.45-.534.876-1.064 1.555l-.116.123l-.254.229z"></svg:path>`,
})
export class JamHeader2Icon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
