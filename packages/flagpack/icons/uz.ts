import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackUzIcon],svg[flagpack-uz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#14DC5A" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"></svg:path><svg:path fill="#0099B5" fill-rule="evenodd" d="M0 0h32v10H0z" clip-rule="evenodd"></svg:path><svg:path fill="#F7FCFF" stroke="#C51918" d="M-2 9.5h-.5v7h37v-7z"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m14.541 3.006l-.673.374l.192-.76l-.644-.558h.842l.282-.72l.331.72h.718l-.564.558l.271.76zm-3.608 2.291l.673-.374l.755.374l-.27-.76l.563-.558h-.718l-.33-.72l-.283.72h-.842l.644.558zM8.428 6.961l-.673.374l.192-.76l-.645-.559h.842l.283-.719l.33.72h.719l-.564.558l.27.76zm3.178 0l-.673.374l.192-.76l-.644-.559h.842l.282-.719l.331.72h.718l-.564.558l.271.76zm2.98 0l-.673.374l.192-.76l-.644-.559h.842l.282-.719l.331.72h.718l-.564.558l.271.76zm-.673-1.664l.673-.374l.755.374l-.27-.76l.563-.558h-.718l-.33-.72l-.283.72h-.842l.644.558zm3 2.038l.672-.374l.756.374l-.271-.76l.564-.559h-.718l-.332-.719l-.282.72h-.842l.645.558zm.672-2.412l-.673.374l.193-.76l-.645-.558h.842l.282-.72l.332.72h.718l-.564.558l.27.76zm-.717-1.543l.673-.374l.755.374l-.271-.76l.564-.558h-.718l-.331-.72l-.283.72h-.842l.645.558zm3.748 3.581l-.673.374l.192-.76l-.645-.559h.842l.283-.719l.33.72h.719l-.564.558l.27.76zm-.673-1.664l.673-.374l.755.374l-.271-.76l.564-.558h-.718l-.331-.72l-.283.72h-.842l.645.558zm.628-2.29l-.673.373l.192-.76l-.645-.558h.842l.283-.72l.331.72h.718l-.564.558l.271.76zM5.885 8.24s-2.416-.656-2.37-3.08S6 2.11 6 2.11c-.997-.377-3.945.13-4 3.028c-.054 2.9 2.956 3.47 3.885 3.104" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackUzIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
