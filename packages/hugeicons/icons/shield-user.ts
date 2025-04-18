import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldUserIcon],svg[hugeicons-shield-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M14 8.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" d="m9.59 13.648l-.38-.647zm4.82 0l.38-.647zm-6.093 2.063l-.513.547zm7.366 0l-.513-.547zM9.97 14.295a4.06 4.06 0 0 1 4.062 0l.758-1.294a5.55 5.55 0 0 0-5.578 0zm.071 2.955h3.92v-1.5h-3.92zm-1.21-2.086c-.137-.128-.07-.133-.08-.038c-.006.047-.02.006.111-.121c.28-.27.712-.478 1.108-.71l-.758-1.294c-.233.137-.94.49-1.39.924c-.233.224-.511.57-.563 1.035c-.057.513.18.955.546 1.298zm5.2-.869c.397.232.829.44 1.109.71c.132.127.117.168.112.121c-.01-.095.056-.09-.08.038l1.025 1.094c.366-.342.603-.785.546-1.297c-.052-.465-.33-.812-.563-1.036c-.45-.434-1.157-.787-1.39-.924zm1.14.869c-.421.395-.792.586-1.21.586v1.5c.955 0 1.677-.467 2.236-.992zm-7.366 1.094c.56.525 1.28.992 2.236.992v-1.5c-.418 0-.789-.19-1.21-.586z"></svg:path><svg:path stroke="currentColor" d="M21 11.183V8.28c0-1.64 0-2.46-.404-2.995s-1.318-.794-3.145-1.314a25 25 0 0 1-3.229-1.173C13.023 2.266 12.424 2 12 2s-1.023.266-2.222.798c-.88.39-1.98.818-3.229 1.173c-1.827.52-2.74.78-3.145 1.314C3 5.82 3 6.64 3 8.28v2.903c0 5.625 5.063 9 7.594 10.336c.607.32.91.481 1.406.481s.799-.16 1.406-.48C15.937 20.182 21 16.807 21 11.182"></svg:path></svg:g>`,
})
export class HugeiconsShieldUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
