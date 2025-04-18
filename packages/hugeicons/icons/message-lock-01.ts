import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessageLock01Icon],svg[hugeicons-message-lock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 13.49c-.275 4.243-3.613 7.623-7.805 7.9c-1.43.095-2.923.095-4.35 0a4.9 4.9 0 0 1-1.488-.339c-.513-.21-.77-.316-.9-.3c-.131.016-.32.155-.699.434c-.667.49-1.508.844-2.755.813c-.63-.015-.945-.023-1.086-.263s.034-.572.386-1.237c.487-.922.796-1.978.328-2.823c-.806-1.208-1.49-2.639-1.59-4.184a20 20 0 0 1 0-2.52c.274-4.243 3.613-7.622 7.804-7.9a33 33 0 0 1 2.676-.067M8.5 15h7m-7-5H12"></svg:path><svg:path d="M16.737 5.176v-1.39c0-.206.009-.414.083-.606c.195-.51.715-1.179 1.66-1.179c.944 0 1.484.669 1.68 1.18c.073.191.082.399.082.604v1.39M16.807 11h3.386c.997 0 1.805-.807 1.805-1.802V7.196c0-.995-.808-1.802-1.805-1.802h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802"></svg:path></svg:g>`,
})
export class HugeiconsMessageLock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
