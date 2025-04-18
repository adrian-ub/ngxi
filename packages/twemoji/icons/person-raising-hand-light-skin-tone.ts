import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPersonRaisingHandLightSkinToneIcon],svg[twemoji-person-raising-hand-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FA743E" d="M27 27H10v9h21v-5a4 4 0 0 0-4-4"></svg:path><svg:path fill="#F7DECE" d="M15 22v6a3 3 0 1 0 6 0v-6z"></svg:path><svg:path fill="#DD551F" d="M26 32h1v4h-1z"></svg:path><svg:path fill="#292F33" d="M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069c-3.089.059-6.713 2.851-7.188 6.535c-.47 3.645.578 5.338.951 8.079c.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639c.178-4.812-2.645-8.456-7.723-10.099"></svg:path><svg:path fill="#F7DECE" d="M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96c.713.327 1.396 1.455 1.485 2.079s.178 1.129-.386.505c-2.26-2.499-4.722-1.515-7.162-3.041c-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299"></svg:path><svg:path fill="#C1694F" d="M22 22h-8s1 2 4 2s4-2 4-2m-3-2.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1"></svg:path><svg:path fill="#662113" d="M14 16a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1"></svg:path><svg:path fill="#F7DECE" d="M12.421 2.935a1.283 1.283 0 0 0-1.776.367L10 4.284V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8s0 1 1 1h6l1-1V8.957l2.789-4.246a1.28 1.28 0 0 0-.368-1.776"></svg:path><svg:path fill="#E0AA94" d="M4 0h1v5H4zm3 0h1v5H7z"></svg:path><svg:path fill="#FA743E" d="M9 27h3l-2 9c-8 0-8-9-8-9V10h8z"></svg:path>`,
})
export class TwemojiPersonRaisingHandLightSkinToneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
