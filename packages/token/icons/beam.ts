import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBeamIcon],svg[token-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.05h3.735L12 9.75V5.7l7.65 12.6H12zm0 0H8.247L12 9.75V5.7L4.35 18.3H12z"></svg:path><svg:path fill="currentColor" d="M12 11.55v3.6H9.75zm0 0v3.6h2.25z"></svg:path><svg:path fill="currentColor" d="m3 9.643l8.99 4.158v.436L3 12.271zm18-1.211l-9.009 5.373v.148L21 10.17zm0 5.207l-9.009.603v-.144L21 11.902z"></svg:path><svg:path fill="currentColor" d="m21 10.169l-9.009 3.78v.148L21 11.9z"></svg:path>`,
})
export class TokenBeamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
