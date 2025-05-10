import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHikingBoldIcon],svg[solar-hiking-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005l.029.008c.008.003.042.014.082.032l.02.009l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.63 3.697l.005-.003zm-.541-1.4h.002l.007-.003zm-3.117.216a.75.75 0 0 1-.475.948l-1.672.558a1.19 1.19 0 0 0-.815 1.13c0 .085.047.161.122.199l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.951-1.54c0-1.158.742-2.187 1.84-2.553l1.673-.558a.75.75 0 0 1 .949.475m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingBoldDuotoneIcon],svg[solar-hiking-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005l.029.008c.008.003.042.014.082.032l.02.009l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.63 3.697l.005-.003zm-.541-1.4h.002l.007-.003z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.712 9.763a.75.75 0 0 1-.475.949l-1.672.557A1.19 1.19 0 0 0 5.75 12.4c0 .084.047.16.122.198l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.95-1.539c0-1.159.742-2.187 1.84-2.554l1.673-.557a.75.75 0 0 1 .949.474m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" opacity=".5"></svg:path>`,
})
export class SolarHikingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingBrokenIcon],svg[solar-hiking-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22"></svg:path><svg:path fill="currentColor" d="m10.375 11.246l.747.074zm-.162 1.622l.747.074zm3.79-1.533l-.48.577zm.081.068l.48-.576zm3.832 0l-.48-.576zm1.564-.327a.75.75 0 0 0-.96-1.152zm-5.252 8.988l.747-.067zm-.575 2.002a.75.75 0 1 0 1.495-.133zm1.661-9.791l-.257.704zm1.372 0l.257.704zm-4.592-2.033l-.18.728zm.148.056l-.242.71zm1.24.627l.428-.615zm-1.665 5.21l.398-.636zm1.664 1.236l-.584.47zm.398.65l-.683.307zm-3.674-3.462l-.716.224zm.269.548l-.615.43zm.011-4.423l.683.311zm.824-.581l-.065-.747zm-1.68 1.068l-.162 1.622l1.492.15l.163-1.623zm3.894.74l.081.069l.96-1.153l-.08-.068zm4.873.069l1.084-.904l-.96-1.152l-1.084.903zm-4.915 8.15l.172 1.936l1.495-.133l-.173-1.936zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1zm-2.379 2.153a2.75 2.75 0 0 0 1.886 0l-.514-1.41a1.25 1.25 0 0 1-.858 0zm-3.143-2.01h.002q.002 0 0 0zl-.01-.003l-.026-.007a.6.6 0 0 1-.126-.053a.76.76 0 0 1-.305-.3a.75.75 0 0 1 .391-1.063a.7.7 0 0 0-.217.127a.753.753 0 0 0-.124 1.016a.76.76 0 0 0 .375.275l.128.046l.485-1.42l-.081-.028l.008.003a1 1 0 0 1 .082.043a.7.7 0 0 1 .148.118a.75.75 0 0 1-.229 1.204l-.043.018l.033-.013c.014-.007.058-.026.11-.06a.75.75 0 0 0 .34-.649a.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031l-.029-.008l-.018-.005l-.008-.002zm2.57-.21a8 8 0 0 0-.574-.45l-.857 1.23c.148.104.238.179.47.372zM12 11.007a5.3 5.3 0 0 1 1.053.533l.857-1.231a6.8 6.8 0 0 0-1.425-.722zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802zm-2.078-2.155q.18.224.299.486l1.367-.616a3.8 3.8 0 0 0-.498-.81zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235zm-2.726-.716q.127.405.37.754l1.23-.86a1.3 1.3 0 0 1-.168-.342zm1.633-3.463c.014-.146.022-.217.031-.27c.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8zm1.152-1.806q-.3-.077-.524-.122a1.8 1.8 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015c.1.02.232.052.447.105zm-1.106 1.481c-.007.016-.007.01.013-.013a.5.5 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.8 1.8 0 0 0-.846.33c-.22.155-.459.388-.595.686z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V8m0 14v-3M8 10l-1.672.557A1.94 1.94 0 0 0 5 12.4a.97.97 0 0 0 .537.868L8 14.5"></svg:path></svg:g>`,
})
export class SolarHikingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingLineDuotoneIcon],svg[solar-hiking-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="m10.375 11.246l.747.074zm-.162 1.622l.747.074zm3.79-1.533l-.48.577zm.081.068l.48-.576zm3.832 0l-.48-.576zm1.564-.327a.75.75 0 0 0-.96-1.152zm-5.252 8.988l.747-.067zm-.575 2.002a.75.75 0 1 0 1.495-.133zm1.661-9.791l-.257.704zm1.372 0l.257.704zm-4.592-2.033l-.18.728zm.148.056l-.242.71zm1.24.627l.428-.615zm-1.665 5.21l.398-.636zm1.664 1.236l-.584.47zm.398.65l-.683.307zm-3.674-3.462l-.716.224zm.269.548l-.615.43zm.011-4.423l.683.311zm.824-.581l-.065-.747zm-1.68 1.068l-.162 1.622l1.492.15l.163-1.623zm3.894.74l.081.069l.96-1.153l-.08-.068zm4.873.069l1.084-.904l-.96-1.152l-1.084.903zm-4.915 8.15l.172 1.936l1.495-.133l-.173-1.936zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1zm-2.379 2.153a2.75 2.75 0 0 0 1.886 0l-.514-1.41a1.25 1.25 0 0 1-.858 0zm-3.143-2.01h.002q.002 0 0 0zl-.01-.003l-.026-.007a.6.6 0 0 1-.126-.053a.76.76 0 0 1-.305-.3a.75.75 0 0 1 .391-1.063a.7.7 0 0 0-.217.127a.753.753 0 0 0-.124 1.016a.76.76 0 0 0 .375.275l.128.046l.485-1.42l-.081-.028l.008.003a1 1 0 0 1 .082.043a.7.7 0 0 1 .148.118a.75.75 0 0 1-.229 1.204l-.043.018l.033-.013c.014-.007.058-.026.11-.06a.75.75 0 0 0 .34-.649a.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031l-.029-.008l-.018-.005l-.008-.002zm2.57-.21a8 8 0 0 0-.574-.45l-.857 1.23c.148.104.238.179.47.372zM12 11.007a5.3 5.3 0 0 1 1.053.533l.857-1.231a6.8 6.8 0 0 0-1.425-.722zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802zm-2.078-2.155q.18.224.299.486l1.367-.616a3.8 3.8 0 0 0-.498-.81zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235zm-2.726-.716q.127.405.37.754l1.23-.86a1.3 1.3 0 0 1-.168-.342zm1.633-3.463c.014-.146.022-.217.031-.27c.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8zm1.152-1.806q-.3-.077-.524-.122a1.8 1.8 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015c.1.02.232.052.447.105zm-1.106 1.481c-.007.016-.007.01.013-.013a.5.5 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.8 1.8 0 0 0-.846.33c-.22.155-.459.388-.595.686z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22V8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8 10l-1.672.557A1.94 1.94 0 0 0 5 12.4a.97.97 0 0 0 .537.868L8 14.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHikingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingLinearIcon],svg[solar-hiking-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22"></svg:path><svg:path fill="currentColor" d="m10.375 11.246l.746.074zm-.162 1.622l.746.074zm3.79-1.533l-.48.577zm.081.068l.48-.576zm3.831 0l-.48-.576zm1.565-.327a.75.75 0 0 0-.96-1.152zm-5.252 8.988l.747-.067zm-.575 2.002a.75.75 0 1 0 1.494-.133zm1.66-9.791l-.256.704zm1.373 0l.257.704zm-4.593-2.033l-.18.728zm.15.056l-.243.71zm1.238.627l.428-.615zm-1.664 5.21l.397-.636zm1.664 1.236l-.584.47zm.398.65l-.684.307zm-3.674-3.462l-.716.224zm.269.548l-.615.43zm.011-4.423l.682.311zm.824-.581l-.065-.747zm-1.68 1.068l-.162 1.622l1.492.15l.162-1.623zm3.894.74l.081.069l.96-1.153l-.081-.068zm4.872.069l1.085-.904l-.96-1.152l-1.085.903zm-4.914 8.15l.172 1.936l1.494-.133l-.172-1.936zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.007-.743zm3.831-1.153c-.648.54-.832.68-1.007.743l.515 1.41c.48-.176.897-.538 1.452-1zm-2.378 2.153a2.75 2.75 0 0 0 1.886 0l-.515-1.41a1.25 1.25 0 0 1-.857 0zm-3.144-2.01h.003zl-.01-.003q-.007 0-.026-.007a.7.7 0 0 1-.126-.053a.73.73 0 0 1-.305-.3a.75.75 0 0 1 .358-1.05l.033-.013a.8.8 0 0 0-.216.127a.75.75 0 0 0 .196 1.27l.053.021l.129.046l.485-1.42l-.081-.028l.008.003l.024.012a.7.7 0 0 1 .206.149a.747.747 0 0 1-.057 1.096a.8.8 0 0 1-.172.108l-.044.018l.034-.013c.014-.007.058-.026.11-.06a.74.74 0 0 0 .34-.649a.75.75 0 0 0-.442-.664c-.041-.018-.075-.028-.083-.031l-.028-.008l-.019-.005l-.008-.002zm2.57-.21a7 7 0 0 0-.574-.45l-.856 1.23c.147.104.238.179.47.372zM12 11.007c.296.101.795.354 1.053.533l.856-1.231a6.8 6.8 0 0 0-1.424-.722zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.998-.869-1.85-1.402zm3.555 3.226c-.09-1.002-.14-1.68-.412-2.285l-1.368.616c.144.32.187.695.286 1.802zm-2.078-2.155q.18.224.298.486l1.368-.616a3.8 3.8 0 0 0-.498-.81zm-3.43-5.05c-.08.802-.157 1.42.022 1.991l1.431-.448c-.065-.208-.054-.458.04-1.393zm2.747 2.707c-.796-.497-1-.642-1.126-.821l-1.23.858c.343.49.878.809 1.561 1.235zm-2.725-.716q.127.405.37.754l1.23-.86a1.3 1.3 0 0 1-.168-.342zm1.632-3.463c.015-.146.023-.217.032-.27c.007-.039.011-.048.014-.055l-1.364-.623c-.13.286-.15.557-.174.8zm1.152-1.806c-.198-.05-.376-.093-.524-.122a1.8 1.8 0 0 0-.505-.036l.13 1.494c-.02.002-.005-.003.093.015c.1.02.232.052.446.105zm-1.106 1.481c-.007.016-.007.01.014-.013a.5.5 0 0 1 .175-.124c.028-.011.034-.01.017-.008l-.13-1.494a1.8 1.8 0 0 0-.845.33a1.77 1.77 0 0 0-.595.686z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22V8M8 10l-1.672.557A1.94 1.94 0 0 0 5 12.4a.97.97 0 0 0 .537.868L8 14.5"></svg:path></svg:g>`,
})
export class SolarHikingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticBoldIcon],svg[solar-hiking-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 1 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 1 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V7a.75.75 0 0 1 .75-.75m-9.81 9.525a.75.75 0 0 1 .535.916L9 16.5l.725.19v.003l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.005.005L6 21l.458.594a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticBoldDuotoneIcon],svg[solar-hiking-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.069.686a1.54 1.54 0 0 0 .715 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 0 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.738-.563l.154-.128V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.19 15.775a.75.75 0 0 1 .535.916v.002l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.04l-.014.01l-.005.004a.75.75 0 0 1-.916-1.188l.003-.002l.01-.007l.04-.033q.056-.043.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.911.635-1.416a14 14 0 0 0 .25-.804l.014-.048l.003-.011v-.002a.75.75 0 0 1 .917-.535" opacity=".5"></svg:path>`,
})
export class SolarHikingMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticBrokenIcon],svg[solar-hiking-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"></svg:path><svg:path fill="currentColor" d="m10.21 11.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 10.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 14V7m0 14v-3"></svg:path></svg:g>`,
})
export class SolarHikingMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticLineDuotoneIcon],svg[solar-hiking-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m10.21 11.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 10.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 21V7"></svg:path></svg:g>`,
})
export class SolarHikingMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticLinearIcon],svg[solar-hiking-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"></svg:path><svg:path fill="currentColor" d="m10.21 11.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 10.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 21V7"></svg:path></svg:g>`,
})
export class SolarHikingMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticOutlineIcon],svg[solar-hiking-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M8.25 5.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 1 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 1 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V7a.75.75 0 0 1 .75-.75m-9.81 9.525a.75.75 0 0 1 .535.916L9 16.5l.725.19v.003l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.004.004S6.456 21.595 6 21l.458.594a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingOutlineIcon],svg[solar-hiking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 2.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M8.25 4.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005a1 1 0 0 1 .131.049l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.625 3.694l-.005.002l-.004.002zm-.546-1.397h.002l.007-.003zm-3.117.216a.75.75 0 0 1-.475.948l-1.672.558a1.19 1.19 0 0 0-.815 1.13c0 .085.047.161.122.199l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.951-1.54c0-1.158.742-2.187 1.84-2.553l1.673-.558a.75.75 0 0 1 .949.475m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundBoldIcon],svg[solar-hiking-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.143 1.607a.75.75 0 0 1-1.495.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704m-.558 6.82c.4.105.64.515.534.916L9 17.5l.725.19v.003l-.001.005l-.005.016l-.016.058q-.02.076-.06.207a16 16 0 0 1-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.005.005l-.445-.577l.445.577a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundBoldDuotoneIcon],svg[solar-hiking-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 1 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704m-.56 6.82a.75.75 0 0 1 .535.916v.002l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.005.005a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" opacity=".5"></svg:path>`,
})
export class SolarHikingRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundBrokenIcon],svg[solar-hiking-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"></svg:path><svg:path fill="currentColor" d="m10.21 12.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 11.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V8m0 14v-3M9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15"></svg:path></svg:g>`,
})
export class SolarHikingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundLineDuotoneIcon],svg[solar-hiking-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m10.21 12.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 11.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22V8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHikingRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundLinearIcon],svg[solar-hiking-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"></svg:path><svg:path fill="currentColor" d="m10.21 12.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 11.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22V8M9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15"></svg:path></svg:g>`,
})
export class SolarHikingRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundOutlineIcon],svg[solar-hiking-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 2.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M8.25 4.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.143 1.607a.75.75 0 0 1-1.495.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704m-.558 6.82c.4.105.64.515.534.916L9 17.5l.725.19v.003l-.001.005l-.005.016l-.016.058q-.02.076-.06.207a16 16 0 0 1-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.004.004s-.002.001-.446-.576l.445.577a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BoldIcon],svg[solar-history-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistory2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BoldDuotoneIcon],svg[solar-history-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.419.174a.75.75 0 1 1-.608-1.371q.24-.107.487-.203a.75.75 0 0 1 .97.43M5.648 4.241a.75.75 0 0 1-.026 1.06q-.165.158-.32.321a.75.75 0 1 1-1.087-1.034q.182-.191.373-.373a.75.75 0 0 1 1.06.026M3.161 7.26a.75.75 0 0 1 .38.99q-.091.207-.173.42a.75.75 0 0 1-1.4-.54q.096-.248.203-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class SolarHistory2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BrokenIcon],svg[solar-history-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10c1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path><svg:path stroke-dasharray=".5 3.5" d="M17 20.662A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path></svg:g>`,
})
export class SolarHistory2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2LineDuotoneIcon],svg[solar-history-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10" stroke-dasharray=".5 3.5" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarHistory2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2LinearIcon],svg[solar-history-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path><svg:circle cx="12" cy="12" r="10" stroke-dasharray=".5 3.5"></svg:circle></svg:g>`,
})
export class SolarHistory2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2OutlineIcon],svg[solar-history-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistory2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BoldIcon],svg[solar-history-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381m-1.139 3.743a.75.75 0 0 1 .732.768a10 10 0 0 0 0 .456a.75.75 0 0 1-1.5.036a11 11 0 0 1 0-.528a.75.75 0 0 1 .768-.732M21.603 14.9a.75.75 0 0 1 .429.97q-.095.247-.202.488a.75.75 0 1 1-1.371-.609a9 9 0 0 0 .174-.419a.75.75 0 0 1 .97-.43m-19.205 0a.75.75 0 0 1 .97.43q.081.211.173.42a.75.75 0 1 1-1.37.608q-.108-.24-.203-.488a.75.75 0 0 1 .43-.97m17.362 3.452c.3.286.311.76.026 1.06q-.183.192-.373.374a.75.75 0 1 1-1.035-1.087q.165-.156.321-.32a.75.75 0 0 1 1.06-.027m-15.52 0a.75.75 0 0 1 1.06.026q.157.165.322.321a.75.75 0 1 1-1.035 1.087a11 11 0 0 1-.373-.373a.75.75 0 0 1 .026-1.06m3.021 2.488a.75.75 0 0 1 .99-.381q.207.092.419.174a.75.75 0 0 1-.54 1.399a11 11 0 0 1-.488-.202a.75.75 0 0 1-.381-.99m9.478 0a.75.75 0 0 1-.381.99q-.24.107-.488.202a.75.75 0 1 1-.54-1.4a9 9 0 0 0 .42-.173a.75.75 0 0 1 .989.381m-5.735 1.139a.75.75 0 0 1 .768-.732a9 9 0 0 0 .456 0a.75.75 0 0 1 .036 1.5a11 11 0 0 1-.528 0a.75.75 0 0 1-.732-.768M12 2.75A9.25 9.25 0 0 1 21.25 12a.75.75 0 0 0 1.5 0c0-5.937-4.813-10.75-10.75-10.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistory3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BoldDuotoneIcon],svg[solar-history-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75A9.25 9.25 0 0 1 21.25 12a.75.75 0 0 0 1.5 0c0-5.937-4.813-10.75-10.75-10.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.174a.75.75 0 1 1-.608-1.371q.24-.107.488-.203a.75.75 0 0 1 .97.43M5.648 4.241a.75.75 0 0 1-.026 1.06q-.165.158-.321.321a.75.75 0 1 1-1.087-1.034q.183-.191.373-.373a.75.75 0 0 1 1.06.026M3.16 7.26a.75.75 0 0 1 .381.99q-.092.207-.174.42a.75.75 0 0 1-1.399-.54q.094-.248.202-.488a.75.75 0 0 1 .99-.381m-1.139 3.744a.75.75 0 0 1 .732.768a10 10 0 0 0 0 .456a.75.75 0 1 1-1.5.036a11 11 0 0 1 0-.529a.75.75 0 0 1 .768-.731M21.603 14.9a.75.75 0 0 1 .429.97q-.095.247-.202.487a.75.75 0 1 1-1.371-.608q.092-.207.174-.42a.75.75 0 0 1 .97-.429m-19.205 0a.75.75 0 0 1 .97.43q.081.211.173.419a.75.75 0 1 1-1.37.608q-.108-.24-.203-.487a.75.75 0 0 1 .43-.97m17.362 3.452c.3.285.311.76.026 1.06a11 11 0 0 1-.373.373a.75.75 0 1 1-1.035-1.086q.165-.157.321-.321a.75.75 0 0 1 1.06-.026m-15.52 0a.75.75 0 0 1 1.06.026q.157.165.322.32a.75.75 0 0 1-1.035 1.087a11 11 0 0 1-.373-.373a.75.75 0 0 1 .026-1.06M7.26 20.84a.75.75 0 0 1 .99-.382q.207.093.419.174a.75.75 0 0 1-.54 1.4a11 11 0 0 1-.488-.203a.75.75 0 0 1-.381-.99m9.478 0a.75.75 0 0 1-.381.99q-.24.106-.488.202a.75.75 0 0 1-.54-1.4q.211-.081.42-.174a.75.75 0 0 1 .989.382m-5.735 1.139a.75.75 0 0 1 .768-.732a10 10 0 0 0 .456 0a.75.75 0 0 1 .036 1.5a11 11 0 0 1-.528 0a.75.75 0 0 1-.732-.768" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHistory3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BrokenIcon],svg[solar-history-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path><svg:path d="M22 12c0-1.821-.487-3.53-1.338-5M12 2c1.821 0 3.53.487 5 1.338"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3LineDuotoneIcon],svg[solar-history-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"></svg:path><svg:path d="M22 12c0-5.523-4.477-10-10-10"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3LinearIcon],svg[solar-history-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M22 12c0-5.523-4.477-10-10-10"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3OutlineIcon],svg[solar-history-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381m-1.139 3.743a.75.75 0 0 1 .732.768a10 10 0 0 0 0 .456a.75.75 0 0 1-1.5.036a11 11 0 0 1 0-.528a.75.75 0 0 1 .768-.732M21.603 14.9a.75.75 0 0 1 .429.97q-.095.247-.202.488a.75.75 0 1 1-1.371-.609a9 9 0 0 0 .174-.419a.75.75 0 0 1 .97-.43m-19.205 0a.75.75 0 0 1 .97.43q.081.211.173.42a.75.75 0 1 1-1.37.608q-.108-.24-.203-.488a.75.75 0 0 1 .43-.97m17.362 3.452c.3.286.311.76.026 1.06q-.183.192-.373.374a.75.75 0 1 1-1.035-1.087q.165-.156.321-.32a.75.75 0 0 1 1.06-.027m-15.52 0a.75.75 0 0 1 1.06.026q.157.165.322.321a.75.75 0 1 1-1.035 1.087a11 11 0 0 1-.373-.373a.75.75 0 0 1 .026-1.06m3.021 2.488a.75.75 0 0 1 .99-.381q.207.092.419.174a.75.75 0 0 1-.54 1.399a11 11 0 0 1-.488-.202a.75.75 0 0 1-.381-.99m9.478 0a.75.75 0 0 1-.381.99q-.24.107-.488.202a.75.75 0 1 1-.54-1.4a9 9 0 0 0 .42-.173a.75.75 0 0 1 .989.381m-5.735 1.139a.75.75 0 0 1 .768-.732a9 9 0 0 0 .456 0a.75.75 0 0 1 .036 1.5a11 11 0 0 1-.528 0a.75.75 0 0 1-.732-.768M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistory3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryBoldIcon],svg[solar-history-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistoryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryBoldDuotoneIcon],svg[solar-history-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.427-2.426a1 1 0 0 1-.293-.708V8a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class SolarHistoryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryBrokenIcon],svg[solar-history-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l2.5 2.5"></svg:path><svg:path fill="currentColor" d="m5.604 5.604l-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 0 0-1.5.008zM3.75 12a.75.75 0 0 0-1.5 0zm13.125 8.445a.75.75 0 1 0-.75-1.298zm2.272-4.32a.75.75 0 1 0 1.298.75zM5.14 5.07a.75.75 0 1 0 1.056 1.066zm13.722.067c-3.82-3.82-9.993-3.859-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.065zM5.074 5.074L3.808 6.34l1.06 1.06l1.267-1.265zm-.74 2.547l2.546.012l.007-1.5l-2.545-.012zm.754-.754L5.075 4.32l-1.5.008l.013 2.545zM12 3.75A8.25 8.25 0 0 1 20.25 12h1.5A9.75 9.75 0 0 0 12 2.25zm0 16.5A8.25 8.25 0 0 1 3.75 12h-1.5A9.75 9.75 0 0 0 12 21.75zm4.125-1.103A8.2 8.2 0 0 1 12 20.25v1.5c1.775 0 3.44-.475 4.875-1.305zM20.25 12a8.2 8.2 0 0 1-1.103 4.125l1.298.75A9.7 9.7 0 0 0 21.75 12zM6.196 6.137A8.22 8.22 0 0 1 12 3.75v-1.5a9.72 9.72 0 0 0-6.86 2.821z"></svg:path></svg:g>`,
})
export class SolarHistoryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryLineDuotoneIcon],svg[solar-history-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l2.5 2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m5.604 5.604l-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 1 0-1.5.008zm-1.248 6.464a.75.75 0 1 0-1.486-.204zm15.035-5.647c-3.82-3.82-9.993-3.86-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.064zM5.138 18.862c3.82 3.82 9.993 3.86 13.788.064l-1.06-1.06c-3.2 3.199-8.423 3.18-11.668-.064zm13.788.064c3.795-3.795 3.756-9.968-.064-13.788l-1.06 1.06c3.244 3.245 3.263 8.468.064 11.668zM5.074 5.074L3.807 6.34L4.868 7.4l1.266-1.266zm-.74 2.547l2.546.012l.007-1.5l-2.545-.012zm.754-.754L5.075 4.32l-1.5.008l.013 2.545zM2.34 10.58a9.81 9.81 0 0 0 2.797 8.281l1.06-1.06a8.31 8.31 0 0 1-2.371-7.017z"></svg:path></svg:g>`,
})
export class SolarHistoryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryLinearIcon],svg[solar-history-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l2.5 2.5"></svg:path><svg:path fill="currentColor" d="m5.604 5.604l-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 1 0-1.5.008zm-1.248 6.464a.75.75 0 1 0-1.486-.204zm15.035-5.647c-3.82-3.82-9.993-3.86-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.064zM5.138 18.862c3.82 3.82 9.993 3.86 13.788.064l-1.06-1.06c-3.2 3.199-8.423 3.18-11.668-.064zm13.788.064c3.795-3.795 3.756-9.968-.064-13.788l-1.06 1.06c3.244 3.245 3.263 8.468.064 11.668zM5.074 5.074L3.807 6.34L4.868 7.4l1.266-1.266zm-.74 2.547l2.546.012l.007-1.5l-2.545-.012zm.754-.754L5.075 4.32l-1.5.008l.013 2.545zM2.34 10.58a9.81 9.81 0 0 0 2.797 8.281l1.06-1.06a8.31 8.31 0 0 1-2.371-7.017z"></svg:path></svg:g>`,
})
export class SolarHistoryLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryOutlineIcon],svg[solar-history-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistoryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2BoldIcon],svg[solar-home-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHome2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2BoldDuotoneIcon],svg[solar-home-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarHome2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2BrokenIcon],svg[solar-home-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m10-5.796v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path>`,
})
export class SolarHome2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2LineDuotoneIcon],svg[solar-home-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 15v3"></svg:path></svg:g>`,
})
export class SolarHome2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2LinearIcon],svg[solar-home-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></svg:path><svg:path stroke-linecap="round" d="M12 15v3"></svg:path></svg:g>`,
})
export class SolarHome2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2OutlineIcon],svg[solar-home-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHome2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleBoldIcon],svg[solar-home-add-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAddAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleBoldDuotoneIcon],svg[solar-home-add-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarHomeAddAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleBrokenIcon],svg[solar-home-add-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 13h-3m0 0H9m3 0v-3m0 3v3m9.636-3.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path>`,
})
export class SolarHomeAddAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleLineDuotoneIcon],svg[solar-home-add-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarHomeAddAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleLinearIcon],svg[solar-home-add-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarHomeAddAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleOutlineIcon],svg[solar-home-add-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V16a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.725 0-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325c.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978c.29 1.05.702 1.885 1.445 2.524c.742.64 1.63.925 2.716 1.062c1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132c1.086-.137 1.974-.422 2.716-1.061c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.433.373-.994.593-1.925.71c-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12c-.93-.117-1.492-.337-1.925-.71c-.432-.372-.73-.891-.977-1.787c-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026c-.025-.732.058-1.21.258-1.626s.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAddAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddBoldIcon],svg[solar-home-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddBoldDuotoneIcon],svg[solar-home-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path>`,
})
export class SolarHomeAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddBrokenIcon],svg[solar-home-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 14h-3m0 0H9m3 0v-3m0 3v3m10-4.796v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path>`,
})
export class SolarHomeAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddLineDuotoneIcon],svg[solar-home-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 14h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarHomeAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddLinearIcon],svg[solar-home-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></svg:path><svg:path stroke-linecap="round" d="M15 14h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarHomeAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddOutlineIcon],svg[solar-home-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2BoldIcon],svg[solar-home-angle-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngle2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2BoldDuotoneIcon],svg[solar-home-angle-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngle2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2BrokenIcon],svg[solar-home-angle-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m9.636-5.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path>`,
})
export class SolarHomeAngle2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2LineDuotoneIcon],svg[solar-home-angle-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 15v3"></svg:path></svg:g>`,
})
export class SolarHomeAngle2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2LinearIcon],svg[solar-home-angle-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></svg:path><svg:path stroke-linecap="round" d="M12 15v3"></svg:path></svg:g>`,
})
export class SolarHomeAngle2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2OutlineIcon],svg[solar-home-angle-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.725 0-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325c.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978c.29 1.05.702 1.885 1.445 2.524c.742.64 1.63.925 2.716 1.062c1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132c1.086-.137 1.974-.422 2.716-1.061c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.433.373-.994.593-1.925.71c-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12c-.93-.117-1.492-.337-1.925-.71c-.432-.372-.73-.891-.977-1.787c-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026c-.025-.732.058-1.21.258-1.626s.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngle2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleBoldIcon],svg[solar-home-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleBoldDuotoneIcon],svg[solar-home-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarHomeAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleBrokenIcon],svg[solar-home-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 18H9m12.636-5.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path>`,
})
export class SolarHomeAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleLineDuotoneIcon],svg[solar-home-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 18H9"></svg:path></svg:g>`,
})
export class SolarHomeAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleLinearIcon],svg[solar-home-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></svg:path><svg:path stroke-linecap="round" d="M15 18H9"></svg:path></svg:g>`,
})
export class SolarHomeAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleOutlineIcon],svg[solar-home-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.725 0-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325c.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978c.29 1.05.702 1.885 1.445 2.524c.742.64 1.63.925 2.716 1.062c1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132c1.086-.137 1.974-.422 2.716-1.061c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.433.373-.994.593-1.925.71c-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12c-.93-.117-1.492-.337-1.925-.71c-.432-.372-.73-.891-.977-1.787c-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026c-.025-.732.058-1.21.258-1.626s.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeBoldIcon],svg[solar-home-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarHomeBold0" fill="currentColor" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:defs><svg:path fill="currentColor" d="M18.5 3H16a.5.5 0 0 0-.5.5v.059l3.5 2.8V3.5a.5.5 0 0 0-.5-.5"></svg:path><svg:use href="#solarHomeBold0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="m20.75 10.96l.782.626a.75.75 0 0 0 .936-1.172l-8.125-6.5a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25zM9.25 9.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m2.8 3.75c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-1.5V17c0-.728-.002-1.2-.048-1.546c-.044-.325-.114-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4.25h-1.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062z" clip-rule="evenodd"></svg:path><svg:use href="#solarHomeBold0" fill-rule="evenodd" clip-rule="evenodd"></svg:use>`,
})
export class SolarHomeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeBoldDuotoneIcon],svg[solar-home-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarHomeBoldDuotone0" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="m21.532 11.586l-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172M12 6.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597" clip-rule="evenodd"></svg:path><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" opacity=".5"><svg:use href="#solarHomeBoldDuotone0"></svg:use><svg:use href="#solarHomeBoldDuotone0"></svg:use></svg:g><svg:path fill="currentColor" d="M12.05 13.25c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-7.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062zM16 3h2.5a.5.5 0 0 1 .5.5v4.14l-3.5-2.8V3.5A.5.5 0 0 1 16 3" opacity=".5"></svg:path>`,
})
export class SolarHomeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeBrokenIcon],svg[solar-home-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m0-11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5m16 0v4m0 8.5v-4.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44M9 22v-5"></svg:path><svg:path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class SolarHomeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeLineDuotoneIcon],svg[solar-home-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11"></svg:path><svg:path stroke-linecap="round" d="M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M4 22V9.5M20 22V9.5"></svg:path><svg:path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHomeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeLinearIcon],svg[solar-home-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11m-6.5-5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 22V9.5"></svg:path><svg:path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class SolarHomeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeOutlineIcon],svg[solar-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.25 3.75v1.69l2 1.6V3.75zm3.5 4.49V3.5c0-.69-.56-1.25-1.25-1.25H16c-.69 0-1.25.56-1.25 1.25v.74l-.407-.326a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V10.96l.782.626a.75.75 0 0 0 .936-1.172zm-.5 1.52l-5.844-4.675a2.25 2.25 0 0 0-2.812 0L4.75 9.76v11.49h3.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v4.299h3.5zm-5 11.49V17c0-.728-.002-1.2-.048-1.546c-.044-.325-.114-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4.25zM12 8.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 9.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleBoldIcon],svg[solar-home-smile-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22m-4.708-6.447a.75.75 0 0 1 1.049-.156c.728.54 1.607.853 2.553.853s1.825-.313 2.553-.853a.75.75 0 1 1 .894 1.205A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeSmileAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleBoldDuotoneIcon],svg[solar-home-smile-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183s-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 15.397a.75.75 0 0 0-.894 1.205A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 0 0-.894-1.205A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.853"></svg:path>`,
})
export class SolarHomeSmileAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleBrokenIcon],svg[solar-home-smile-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path></svg:g>`,
})
export class SolarHomeSmileAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleLineDuotoneIcon],svg[solar-home-smile-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path></svg:g>`,
})
export class SolarHomeSmileAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleLinearIcon],svg[solar-home-smile-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></svg:path><svg:path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path></svg:g>`,
})
export class SolarHomeSmileAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleOutlineIcon],svg[solar-home-smile-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.447 15.397a.75.75 0 1 0-.894 1.205A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.893-1.205A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.853"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.725 0-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325c.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978c.29 1.05.702 1.885 1.445 2.524c.742.64 1.63.925 2.716 1.062c1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132c1.086-.137 1.974-.422 2.716-1.061c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.433.373-.994.593-1.925.71c-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12c-.93-.117-1.492-.337-1.925-.71c-.432-.372-.73-.891-.977-1.787c-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026c-.025-.732.058-1.21.258-1.626s.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeSmileAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileBoldIcon],svg[solar-home-smile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeSmileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileBoldDuotoneIcon],svg[solar-home-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 15.398a.75.75 0 0 0-.894 1.205A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.147a.75.75 0 0 0-.894-1.206A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"></svg:path>`,
})
export class SolarHomeSmileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileBrokenIcon],svg[solar-home-smile-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path></svg:g>`,
})
export class SolarHomeSmileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileLineDuotoneIcon],svg[solar-home-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path></svg:g>`,
})
export class SolarHomeSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileLinearIcon],svg[solar-home-smile-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></svg:path><svg:path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path></svg:g>`,
})
export class SolarHomeSmileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileOutlineIcon],svg[solar-home-smile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.447 15.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeSmileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleBoldIcon],svg[solar-home-wifi-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02m-4.9-2.16c1.913-2.064 4.988-2.064 6.9 0a.75.75 0 1 0 1.1-1.019c-2.506-2.705-6.594-2.705-9.1 0a.75.75 0 1 0 1.1 1.02m8.9-2.158c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeWifiAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleBoldDuotoneIcon],svg[solar-home-wifi-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.45 12.192c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M15.45 14.35c-1.912-2.063-4.987-2.063-6.9 0a.75.75 0 1 1-1.1-1.019c2.506-2.704 6.594-2.704 9.1 0a.75.75 0 0 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.512 3.699-1.512 5.1 0a.75.75 0 0 1-1.1 1.02"></svg:path>`,
})
export class SolarHomeWifiAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleBrokenIcon],svg[solar-home-wifi-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"></svg:path><svg:path d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleLineDuotoneIcon],svg[solar-home-wifi-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleLinearIcon],svg[solar-home-wifi-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></svg:path><svg:path stroke-linecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleOutlineIcon],svg[solar-home-wifi-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.55 12.192c3.017-3.256 7.883-3.256 10.9 0a.75.75 0 1 0 1.1-1.02c-3.61-3.896-9.49-3.896-13.1 0a.75.75 0 1 0 1.1 1.02"></svg:path><svg:path fill="currentColor" d="M8.55 14.35c1.913-2.064 4.988-2.064 6.9 0a.75.75 0 1 0 1.1-1.019c-2.506-2.705-6.594-2.705-9.1 0a.75.75 0 1 0 1.1 1.02"></svg:path><svg:path fill="currentColor" d="M10.55 16.51c.808-.872 2.092-.872 2.9 0a.75.75 0 1 0 1.1-1.02c-1.401-1.513-3.699-1.513-5.1 0a.75.75 0 1 0 1.1 1.02"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.725 0-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.342.711-.434 1.456-.405 2.325c.029.841.176 1.864.36 3.146l.293 2.032c.237 1.65.426 2.959.707 3.978c.29 1.05.702 1.885 1.445 2.524c.742.64 1.63.925 2.716 1.062c1.056.132 2.387.132 4.066.132h2.316c1.68 0 3.01 0 4.066-.132c1.086-.137 1.974-.422 2.716-1.061c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.433.373-.994.593-1.925.71c-.951.119-2.188.12-3.93.12h-2.213c-1.743 0-2.98-.001-3.931-.12c-.93-.117-1.492-.337-1.925-.71c-.432-.372-.73-.891-.977-1.787c-.253-.917-.43-2.131-.676-3.845l-.279-1.937c-.192-1.335-.326-2.277-.352-3.026c-.025-.732.058-1.21.258-1.626s.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeWifiAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiBoldIcon],svg[solar-home-wifi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22m3.45-9.808c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02m-2 2.159c-1.912-2.065-4.987-2.065-6.9 0a.75.75 0 1 1-1.1-1.02c2.506-2.705 6.594-2.705 9.1 0a.75.75 0 1 1-1.1 1.02m-2 2.158c-.808-.871-2.092-.871-2.9 0a.75.75 0 1 1-1.1-1.019c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeWifiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiBoldDuotoneIcon],svg[solar-home-wifi-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.45 12.192c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M15.45 14.35c-1.912-2.063-4.987-2.063-6.9 0a.75.75 0 1 1-1.1-1.019c2.506-2.704 6.594-2.704 9.1 0a.75.75 0 0 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.512 3.699-1.512 5.1 0a.75.75 0 0 1-1.1 1.02"></svg:path>`,
})
export class SolarHomeWifiBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiBrokenIcon],svg[solar-home-wifi-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path><svg:path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"></svg:path></svg:g>`,
})
export class SolarHomeWifiBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiLineDuotoneIcon],svg[solar-home-wifi-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiLinearIcon],svg[solar-home-wifi-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></svg:path><svg:path stroke-linecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiOutlineIcon],svg[solar-home-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.55 12.192c3.017-3.256 7.883-3.256 10.9 0a.75.75 0 1 0 1.1-1.02c-3.61-3.896-9.49-3.896-13.1 0a.75.75 0 1 0 1.1 1.02"></svg:path><svg:path fill="currentColor" d="M8.55 14.35c1.912-2.064 4.987-2.064 6.9 0a.75.75 0 1 0 1.1-1.019c-2.506-2.705-6.594-2.705-9.1 0a.75.75 0 1 0 1.1 1.02"></svg:path><svg:path fill="currentColor" d="M10.55 16.51c.808-.872 2.092-.872 2.9 0a.75.75 0 1 0 1.1-1.02c-1.401-1.513-3.699-1.513-5.1 0a.75.75 0 1 0 1.1 1.02"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeWifiOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalBoldIcon],svg[solar-hospital-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.5 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5H17V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v15.25H5.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.5 6.393 2.5 7.096 2.5 8.5v12.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM12 4.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75M9.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHospitalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalBoldDuotoneIcon],svg[solar-hospital-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2m1 2.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5H12.5V9A.75.75 0 0 1 11 9V7.75H9.75a.75.75 0 0 1 0-1.5H11V5a.75.75 0 0 1 .75-.75M9 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 12m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m2.75 3.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.913 5.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336q-.005.437-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91q.001-.471-.004-.91c1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552" opacity=".5"></svg:path>`,
})
export class SolarHospitalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalBrokenIcon],svg[solar-hospital-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9V5m2 2h-4"></svg:path><svg:path fill="currentColor" d="M20.25 8.5a.75.75 0 0 0 1.5 0zm-.139-3.163l-.416.624zm.552.552l-.624.417zM21.75 12.5a.75.75 0 0 0-1.5 0zM17.5 5.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-9.5zM3.889 5.337l.417.624zm-.552.552l.624.417zM3.75 17a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 4.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 8.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 0 0-.759.76l1.248.833a1.3 1.3 0 0 1 .345-.345zM2.25 17v5h1.5v-5zm0-8.5V13h1.5V8.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h.5m3.5 0h-1.5"></svg:path></svg:g>`,
})
export class SolarHospitalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalLineDuotoneIcon],svg[solar-hospital-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path d="M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9V5m2 2h-4"></svg:path></svg:g>`,
})
export class SolarHospitalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalLinearIcon],svg[solar-hospital-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9V5m2 2h-4"></svg:path></svg:g>`,
})
export class SolarHospitalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalOutlineIcon],svg[solar-hospital-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65q.035.255.05.545c.59 0 1.088.004 1.499.046c.473.048.913.153 1.309.417c.3.201.558.459.759.76c.264.395.369.835.417 1.308c.046.452.046 1.011.046 1.68V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V8.462c0-.67 0-1.229.046-1.681c.048-.473.153-.913.417-1.309c.201-.3.459-.558.76-.759c.395-.264.835-.369 1.308-.417c.41-.042.909-.046 1.498-.046q.017-.29.05-.544c.085-.628.271-1.195.726-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M6.25 5.75c-.583 0-.994.005-1.317.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567v12.75h2.5v-6.5H5.5a.75.75 0 0 1 0-1.5h.75v-1.5H5.5a.75.75 0 0 1 0-1.5h.75v-1.5H5.5a.75.75 0 1 1 0-1.5h.75zm1.5 15.5h3.5V19a.75.75 0 0 1 1.5 0v2.25h3.5V6c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C7.753 4.388 7.75 5.036 7.75 6zm10-12.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5c.583 0 .994.005 1.317.038c.355.036.519.1.628.173c.136.09.253.208.344.345c.073.108.137.272.173.627c.037.367.038.85.038 1.567v12.75h-2.5v-6.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5h.75a.75.75 0 0 0 0-1.5h-.75zM12 4.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 1 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75M9.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHospitalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassBoldIcon],svg[solar-hourglass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.198 3.3C5.8 2 7.867 2 12 2s6.2 0 6.802 1.3q.078.166.13.346c.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.5 2.5 0 0 1-.13.348C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.3a2.5 2.5 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12L9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647q.052-.18.13-.348"></svg:path>`,
})
export class SolarHourglassBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassBoldDuotoneIcon],svg[solar-hourglass-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.867 2 5.8 2 5.198 3.3a2.5 2.5 0 0 0-.13.346c-.41 1.387 1.052 2.995 3.974 6.21L11 12h2l1.958-2.143c2.922-3.216 4.383-4.824 3.974-6.21a2.5 2.5 0 0 0-.13-.348C18.2 2 16.133 2 12 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.198 20.7C5.8 22 7.867 22 12 22s6.2 0 6.802-1.3a2.5 2.5 0 0 0 .13-.346c.41-1.387-1.052-2.995-3.974-6.21L13 12h-2l-1.958 2.143c-2.922 3.216-4.383 4.824-3.974 6.21q.052.18.13.348" opacity=".5"></svg:path>`,
})
export class SolarHourglassBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassBrokenIcon],svg[solar-hourglass-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.23-.703-.131-1.468-1.013-2.519M12 12l2.958 2.929M12 12l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311C4.838 4.184 5.199 4.95 6.08 6M12 12L9.042 9.071"></svg:path>`,
})
export class SolarHourglassBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineBoldIcon],svg[solar-hourglass-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.198 3.3C5.8 2 7.867 2 12 2s6.2 0 6.802 1.3q.078.166.13.346c.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.5 2.5 0 0 1-.13.348C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.3a2.5 2.5 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12L9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647q.052-.18.13-.348M10 17.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHourglassLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineBoldDuotoneIcon],svg[solar-hourglass-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.867 2 5.8 2 5.198 3.3a2.5 2.5 0 0 0-.13.346c-.41 1.387 1.052 2.995 3.974 6.21L11 12h2l1.958-2.143c2.922-3.216 4.383-4.824 3.974-6.21a2.5 2.5 0 0 0-.13-.348C18.2 2 16.133 2 12 2m-2 2.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.198 20.7C5.8 22 7.867 22 12 22s6.2 0 6.802-1.3a2.5 2.5 0 0 0 .13-.346c.41-1.387-1.052-2.995-3.974-6.21L13 12h-2l-1.958 2.143c-2.922 3.216-4.383 4.824-3.974 6.21q.052.18.13.348" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 17.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarHourglassLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineBrokenIcon],svg[solar-hourglass-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.23-.703-.131-1.468-1.013-2.519M12 12l2.958 2.929M12 12l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311C4.838 4.184 5.199 4.95 6.08 6M12 12L9.042 9.071M10 5.5h4m-4 13h4"></svg:path>`,
})
export class SolarHourglassLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineDuotoneIcon],svg[solar-hourglass-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.958 9.071L12 12L9.042 9.071C6.12 6.177 4.66 4.73 5.068 3.481q.052-.16.13-.312C5.8 2 7.867 2 12 2s6.2 0 6.802 1.17q.078.15.13.311c.41 1.249-1.052 2.696-3.974 5.59Z"></svg:path><svg:path d="M9.042 14.929L12 12l2.958 2.929c2.922 2.894 4.383 4.341 3.974 5.59a2 2 0 0 1-.13.312C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.17a2 2 0 0 1-.13-.311c-.41-1.249 1.052-2.696 3.974-5.59Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHourglassLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineLineDuotoneIcon],svg[solar-hourglass-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.41-1.249-1.052-2.696-3.974-5.59zm0 0l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311c-.41 1.249 1.052 2.696 3.974 5.59z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 5.5h4m-4 13h4"></svg:path></svg:g>`,
})
export class SolarHourglassLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineLinearIcon],svg[solar-hourglass-line-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.41-1.249-1.052-2.696-3.974-5.59zm0 0l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311c-.41 1.249 1.052 2.696 3.974 5.59z"></svg:path><svg:path stroke-linecap="round" d="M10 5.5h4m-4 13h4"></svg:path></svg:g>`,
})
export class SolarHourglassLineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineOutlineIcon],svg[solar-hourglass-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.938 1.25h.124c2.014 0 3.603 0 4.76.153c1.139.15 2.161.48 2.646 1.423q.106.204.177.422c.331 1.01-.159 1.966-.857 2.87c-.71.919-1.834 2.032-3.258 3.442L13.066 12l2.464 2.44c1.424 1.41 2.548 2.523 3.258 3.442c.698.904 1.188 1.86.857 2.87a3 3 0 0 1-.177.422c-.485.943-1.507 1.273-2.645 1.423c-1.158.153-2.747.153-4.76.153h-.125c-2.014 0-3.603 0-4.761-.153c-1.138-.15-2.16-.48-2.646-1.423a3 3 0 0 1-.176-.422c-.331-1.01.159-1.966.857-2.87c.71-.919 1.834-2.032 3.258-3.442L10.934 12L8.47 9.56C7.046 8.15 5.922 7.037 5.212 6.118c-.698-.904-1.188-1.86-.857-2.87q.072-.218.176-.422c.486-.943 1.508-1.273 2.646-1.423c1.158-.153 2.747-.153 4.76-.153M12 10.945l2.43-2.407c1.478-1.463 2.53-2.507 3.17-3.337c.662-.856.697-1.248.62-1.486a1.4 1.4 0 0 0-.085-.202c-.117-.227-.429-.481-1.508-.623c-1.048-.138-2.537-.14-4.627-.14s-3.58.002-4.627.14c-1.08.142-1.391.396-1.508.623a1.4 1.4 0 0 0-.085.202c-.077.238-.042.63.62 1.486c.64.83 1.692 1.874 3.17 3.337zm0 2.11l-2.43 2.407c-1.478 1.463-2.53 2.507-3.17 3.337c-.662.856-.697 1.249-.62 1.486q.034.105.085.202c.117.227.429.481 1.508.623c1.048.138 2.537.14 4.627.14s3.58-.002 4.627-.14c1.08-.142 1.391-.396 1.508-.623q.05-.097.085-.202c.077-.238.042-.63-.62-1.486c-.64-.83-1.692-1.874-3.17-3.337zM9.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHourglassLineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLinearIcon],svg[solar-hourglass-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.41-1.249-1.052-2.696-3.974-5.59zm0 0l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311c-.41 1.249 1.052 2.696 3.974 5.59z"></svg:path>`,
})
export class SolarHourglassLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassOutlineIcon],svg[solar-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.938 1.25h.124c2.014 0 3.603 0 4.76.153c1.139.15 2.161.48 2.646 1.423q.106.204.177.422c.331 1.01-.159 1.966-.857 2.87c-.71.919-1.834 2.032-3.258 3.442L13.066 12l2.464 2.44c1.424 1.41 2.548 2.523 3.258 3.442c.698.904 1.188 1.86.857 2.87a3 3 0 0 1-.177.422c-.485.943-1.507 1.273-2.645 1.423c-1.158.153-2.747.153-4.76.153h-.125c-2.014 0-3.603 0-4.761-.153c-1.138-.15-2.16-.48-2.646-1.423a3 3 0 0 1-.176-.422c-.331-1.01.159-1.966.857-2.87c.71-.919 1.834-2.032 3.258-3.442L10.934 12L8.47 9.56C7.046 8.15 5.922 7.037 5.212 6.118c-.698-.904-1.188-1.86-.857-2.87q.072-.218.176-.422c.486-.943 1.508-1.273 2.646-1.423c1.158-.153 2.747-.153 4.76-.153M12 10.945l2.43-2.407c1.478-1.463 2.53-2.507 3.17-3.337c.662-.856.697-1.248.62-1.486a1.4 1.4 0 0 0-.085-.202c-.117-.227-.429-.481-1.508-.623c-1.048-.138-2.537-.14-4.627-.14s-3.58.002-4.627.14c-1.08.142-1.391.396-1.508.623a1.4 1.4 0 0 0-.085.202c-.077.238-.042.63.62 1.486c.64.83 1.692 1.874 3.17 3.337zm0 2.11l-2.43 2.407c-1.478 1.463-2.53 2.507-3.17 3.337c-.662.856-.697 1.249-.62 1.486q.034.105.085.202c.117.227.429.481 1.508.623c1.048.138 2.537.14 4.627.14s3.58-.002 4.627-.14c1.08-.142 1.391-.396 1.508-.623q.05-.097.085-.202c.077-.238.042-.63-.62-1.486c-.64-.83-1.692-1.874-3.17-3.337z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHourglassOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportBoldIcon],svg[solar-import-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.748 12c-.448 0-.84.274-1.157.591l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3C7.092 12.274 6.7 12 6.252 12H4a8 8 0 1 0 16 0z"></svg:path>`,
})
export class SolarImportBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportBoldDuotoneIcon],svg[solar-import-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 0 16 0z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarImportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportBrokenIcon],svg[solar-import-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"></svg:path></svg:g>`,
})
export class SolarImportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportLineDuotoneIcon],svg[solar-import-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarImportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportLinearIcon],svg[solar-import-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0"></svg:path><svg:path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarImportLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportOutlineIcon],svg[solar-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.47 10.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V4a.75.75 0 0 1 1.5 0v8.19z"></svg:path><svg:path fill="currentColor" d="M20.75 12a.75.75 0 0 0-1.5 0a7.25 7.25 0 1 1-14.5 0a.75.75 0 0 0-1.5 0a8.75 8.75 0 1 0 17.5 0"></svg:path>`,
})
export class SolarImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveBoldIcon],svg[solar-inbox-archive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m3-3.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.5 2.5 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5m0 2v1a2.5 2.5 0 0 1 1.5-.5h11a2.5 2.5 0 0 1 1.5.5v-1A1.5 1.5 0 0 0 17.5 9h-11A1.5 1.5 0 0 0 5 10.5m15 3.75a.75.75 0 1 1 0 1.5h-2.343c-.879 0-1.11.013-1.307.095c-.198.082-.37.236-.991.857l-.305.305c-.432.432-.773.774-1.207.98q-.122.057-.248.102c-.453.162-.936.162-1.547.161h-.218c-.646 0-1.157.001-1.63-.178a3 3 0 0 1-.26-.114c-.452-.227-.797-.603-1.235-1.079l-.11-.121c-.59-.64-.753-.799-.944-.889l-.061-.027c-.195-.079-.424-.092-1.293-.092H4a.75.75 0 0 1 0-1.5h1.02v-1A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.48 1.25v1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxArchiveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveBoldDuotoneIcon],svg[solar-inbox-archive-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 8.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.5 2.5 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5m0 3v-1A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5v1a2.5 2.5 0 0 0-1.5-.5h-11a2.5 2.5 0 0 0-1.5.5M20.75 15a.75.75 0 0 0-.75-.75h-1.02v-1A1.5 1.5 0 0 0 17.5 12h-11a1.5 1.5 0 0 0-1.48 1.25v1H4a.75.75 0 0 0 0 1.5h2.301c.87 0 1.098.013 1.293.092l.061.027c.19.09.355.25.943.889l.036.038l.075.083c.438.476.783.852 1.236 1.08q.126.063.258.113c.474.18.985.179 1.631.178h.218c.611 0 1.094.001 1.547-.161q.126-.045.248-.103c.434-.205.775-.547 1.207-.98l.075-.074l.23-.23c.621-.621.793-.775.991-.857s.428-.095 1.307-.095H20a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class SolarInboxArchiveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveBrokenIcon],svg[solar-inbox-archive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 15h2.301c.809 0 1.213 0 1.576.148q.049.02.098.043c.354.167.628.464 1.175 1.059l.035.038c.513.557.769.835 1.096 1q.092.046.188.082c.343.13.72.13 1.477.13c.715 0 1.073 0 1.4-.117q.091-.033.18-.075c.314-.148.567-.401 1.073-.907l.23-.23c.577-.577.866-.866 1.234-1.019S16.84 15 17.657 15H20"></svg:path><svg:path d="M5 15v-1.5A1.5 1.5 0 0 1 6.5 12h8.25m2.75 0a1.5 1.5 0 0 1 1.5 1.5V15"></svg:path><svg:path d="M5 14v-3.5A1.5 1.5 0 0 1 6.5 9H10m9 5v-3.5A1.5 1.5 0 0 0 17.5 9H14"></svg:path><svg:path d="M5 11V7.5A1.5 1.5 0 0 1 6.5 6M19 11V7.5A1.5 1.5 0 0 0 17.5 6H9.25"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInboxArchiveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveLineDuotoneIcon],svg[solar-inbox-archive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M4 14.25a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 0 0 0-1.5zm-5.401.651l-.53-.53zm.23-.23l-.53-.53zm-5.679.079l-.552.508zm.035.038l.552-.507zm1.096 1l-.336.67zm.188.082l.266-.701zm3.057-.062l-.32-.678zm-.18.075l.253.706zm2.717-2.23l-.287-.694zm-8.186-.005l.283-.695zm.098.043l-.32.678zM4.25 15a.75.75 0 0 0 1.5 0zm14 0a.75.75 0 0 0 1.5 0zM4 15.75h2.301v-1.5H4zm13.657 0H20v-1.5h-2.343zm-2.528 1.182l.23-.23l-1.06-1.06l-.23.229zm-6.53-.174l.035.038l1.103-1.015l-.035-.039zm.035.038c.473.515.832.922 1.31 1.162l.673-1.34c-.176-.089-.33-.24-.88-.837zm3.312-.046c-.813 0-1.027-.011-1.211-.081l-.531 1.403c.5.19 1.042.178 1.742.178zm-2.001 1.208q.126.063.258.114l.532-1.403a1 1 0 0 1-.118-.052zm4.123-2.087c-.543.543-.693.68-.862.76l.64 1.355c.46-.217.815-.586 1.283-1.054zm-2.122 2.379c.662 0 1.175.01 1.653-.161l-.506-1.412c-.176.063-.379.073-1.147.073zm1.26-1.62a1 1 0 0 1-.113.047l.506 1.412q.126-.045.248-.103zm4.45-2.38c-.755 0-1.342-.013-1.88.21l.574 1.385c.198-.082.428-.095 1.307-.095zm-2.297 2.452c.621-.621.793-.775.991-.857l-.574-1.386c-.537.223-.943.648-1.478 1.182zM6.3 15.75c.87 0 1.098.013 1.293.092l.566-1.389c-.53-.216-1.11-.203-1.859-.203zm3.401-.008c-.506-.55-.89-.986-1.408-1.23l-.639 1.357c.19.09.355.25.943.889zm-2.108.1l.061.027l.64-1.357l-.135-.059zM6.5 12.75h11v-1.5h-11zm11 0a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm-11.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-3.75h11v-1.5h-11zm11 0a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm-11.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm0 0v-3h-1.5v3zm.75-3.75h11v-1.5h-11zm11.75.75v3h1.5v-3zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zM5.75 7.5a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 4.25 7.5zm0 7.5v-1.5h-1.5V15zm12.5-1.5V15h1.5v-1.5zm-12.5 0v-3h-1.5v3zm12.5-3v3h1.5v-3z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxArchiveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveLinearIcon],svg[solar-inbox-archive-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 15h2.301c.809 0 1.213 0 1.576.148q.049.02.098.043c.354.167.628.464 1.175 1.059l.035.038c.513.557.769.835 1.096 1q.092.046.188.082c.343.13.72.13 1.477.13c.715 0 1.073 0 1.4-.117q.091-.033.18-.075c.314-.148.567-.401 1.073-.907l.23-.23c.577-.577.866-.866 1.234-1.019S16.84 15 17.657 15H20"></svg:path><svg:path stroke-linecap="round" d="M5 15v-1.5A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.5 1.5V15"></svg:path><svg:path stroke-linecap="round" d="M5 14v-3.5A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5V14"></svg:path><svg:path stroke-linecap="round" d="M5 11V7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5V11"></svg:path></svg:g>`,
})
export class SolarInboxArchiveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveOutlineIcon],svg[solar-inbox-archive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M6.5 6.75a.75.75 0 0 0-.75.75v.878q.354-.126.75-.128h11q.396.002.75.128V7.5a.75.75 0 0 0-.75-.75zm13.25.75a2.25 2.25 0 0 0-2.25-2.25h-11A2.25 2.25 0 0 0 4.25 7.5v6.75H4a.75.75 0 0 0 0 1.5h2.301c.87 0 1.098.013 1.293.092l.061.027c.19.09.355.25.943.889l.036.038l.075.083c.438.476.783.852 1.236 1.08q.126.063.258.113c.474.18.985.179 1.631.178h.218c.611 0 1.094.001 1.547-.161q.126-.045.248-.103c.434-.205.775-.547 1.207-.98l.075-.074l.23-.23c.621-.621.793-.775.991-.857s.428-.095 1.307-.095H20a.75.75 0 0 0 0-1.5h-.25zm-1.5 3a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0-.75.75v.878q.354-.126.75-.128h11q.396.002.75.128zm0 3a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0-.75.75v.75h.671c.69 0 1.237-.001 1.739.203q.068.028.134.06c.49.23.86.632 1.327 1.141l.08.088l.036.039c.55.598.704.748.88.836q.058.03.118.052c.184.07.398.081 1.211.081c.768 0 .971-.01 1.147-.073q.057-.021.113-.047c.169-.08.32-.216.862-.76l.23-.229l.085-.085c.494-.495.885-.886 1.393-1.097c.509-.21 1.061-.21 1.76-.21l.12.001h.594z" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxArchiveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxBoldIcon],svg[solar-inbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.088.102l.605.706c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.605-.707l.088-.102c.502-.587.9-1.052 1.45-1.305c.55-.254 1.162-.253 1.935-.252H22V12c0-4.714 0-7.071-1.465-8.536"></svg:path>`,
})
export class SolarInboxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxBoldDuotoneIcon],svg[solar-inbox-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.61 21.389c1.612 1.61 4.205 1.61 9.39 1.61s7.778 0 9.39-1.61c1.492-1.493 1.601-3.829 1.61-8.29h-3.476c-.996 0-1.494 0-1.931.202c-.438.201-.762.58-1.41 1.335l-.666.777c-.648.756-.972 1.134-1.41 1.335s-.935.202-1.93.202h-.353c-.996 0-1.494 0-1.931-.202c-.438-.2-.762-.579-1.41-1.335l-.666-.777c-.648-.756-.972-1.134-1.41-1.335s-.935-.201-1.93-.201H1c.008 4.46.118 6.796 1.61 8.289"></svg:path>`,
})
export class SolarInboxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxBrokenIcon],svg[solar-inbox-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInboxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInBoldIcon],svg[solar-inbox-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 10.75a.75.75 0 0 0 .53-.22l3-3a.75.75 0 0 0-1.06-1.06l-1.72 1.72V2a.75.75 0 0 0-1.5 0v6.19L9.53 6.47a.75.75 0 0 0-1.06 1.06l3 3c.14.141.331.22.53.22" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M22 12c0-4.714 0-7.071-1.465-8.536c-1.21-1.21-3.03-1.42-6.285-1.456v2.87a2.25 2.25 0 0 1 2.341 3.713l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3A2.25 2.25 0 0 1 9.75 4.878v-2.87c-3.256.036-5.075.246-6.286 1.456C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304s1.162-.253 1.935-.252H22z"></svg:path>`,
})
export class SolarInboxInBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInBoldDuotoneIcon],svg[solar-inbox-in-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535m9.065-9.205a.75.75 0 0 1-1.06 0l-3.3-3.3a.75.75 0 1 1 1.06-1.06l2.02 2.02V2h1.5v6.99l2.02-2.02a.75.75 0 1 1 1.06 1.06z"></svg:path>`,
})
export class SolarInboxInBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInBrokenIcon],svg[solar-inbox-in-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 2v8m0 0l3-3m-3 3L9 7"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127m10 0c1.625.16 2.72.521 3.535 1.338c.974.973 1.3 2.342 1.41 4.535"></svg:path></svg:g>`,
})
export class SolarInboxInBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInLineDuotoneIcon],svg[solar-inbox-in-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 2v8m0 0l3-3m-3 3L9 7" opacity=".5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path><svg:path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127"></svg:path></svg:g>`,
})
export class SolarInboxInLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInLinearIcon],svg[solar-inbox-in-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 2v8m0 0l3-3m-3 3L9 7"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127"></svg:path></svg:g>`,
})
export class SolarInboxInLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInOutlineIcon],svg[solar-inbox-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75m4.254.804a.75.75 0 0 1 .82-.673c1.69.166 2.994.555 3.992 1.553c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v1.086c-.004 1.853-.027 3.35-.19 4.557c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.163-1.207-.186-2.704-.19-4.556v-1.087c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.998-.998 2.302-1.387 3.993-1.553a.75.75 0 1 1 .146 1.492c-1.559.154-2.443.487-3.078 1.122c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.25h2.545c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.088.102l.605.706c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.605-.707l.088-.102c.502-.587.9-1.052 1.45-1.305c.55-.254 1.162-.253 1.935-.252h2.544V12c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.634-.634-1.519-.967-3.078-1.12a.75.75 0 0 1-.673-.82m4.993 11.696H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.753c.01 1.503.045 2.68.173 3.637c.172 1.278.5 2.049 1.069 2.618c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.618c.128-.957.163-2.134.172-3.637" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxInOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineBoldIcon],svg[solar-inbox-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12v.25h-3.294c-.773 0-1.385-.002-1.935.252c-.55.253-.948.718-1.45 1.305l-.693.808c-.634.74-.812.922-1.026 1.02c-.213.099-.468.115-1.442.115h-.32c-.974 0-1.229-.016-1.442-.114c-.214-.099-.392-.282-1.026-1.02l-.693-.81c-.502-.586-.9-1.051-1.45-1.304s-1.162-.253-1.934-.252H2V12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m-2.75 8.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineBoldDuotoneIcon],svg[solar-inbox-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535M8 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm2 3.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarInboxLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineBrokenIcon],svg[solar-inbox-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInboxLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineDuotoneIcon],svg[solar-inbox-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineLineDuotoneIcon],svg[solar-inbox-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineLinearIcon],svg[solar-inbox-line-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4"></svg:path></svg:g>`,
})
export class SolarInboxLineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineOutlineIcon],svg[solar-inbox-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v1.087c-.004 1.852-.027 3.35-.19 4.556c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.163-1.207-.186-2.704-.19-4.556v-1.087c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-9.19 12.5c.01 1.503.045 2.68.173 3.636c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.128-.956.163-2.133.172-3.636H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115zm18.497-1.5h-2.544c-.773 0-1.385-.002-1.935.252c-.55.253-.948.718-1.45 1.305l-.088.102l-.605.706c-.634.74-.812.922-1.026 1.02c-.213.099-.468.115-1.442.115h-.32c-.974 0-1.229-.016-1.442-.114c-.214-.099-.392-.282-1.026-1.02l-.605-.707l-.088-.102c-.502-.587-.9-1.052-1.45-1.305c-.55-.254-1.162-.253-1.934-.252H2.75V12c0-2.378.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386zM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7m2 3.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxLineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLinearIcon],svg[solar-inbox-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path></svg:g>`,
})
export class SolarInboxLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutBoldIcon],svg[solar-inbox-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .53.22l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V10a.75.75 0 0 1-1.5 0V3.81L9.53 5.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .53-.22" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M22 12c0-4.714 0-7.071-1.465-8.536c-1.02-1.02-2.473-1.33-4.856-1.423l-.472-.016l1.384 1.384a2.25 2.25 0 0 1-2.341 3.713V10a2.25 2.25 0 0 1-4.5 0V7.122a2.25 2.25 0 0 1-2.341-3.713l1.376-1.384c-2.66.073-4.235.354-5.32 1.44C2 4.928 2 7.285 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304s1.162-.253 1.935-.252H22z"></svg:path>`,
})
export class SolarInboxOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutBoldDuotoneIcon],svg[solar-inbox-out-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535"></svg:path><svg:path fill="currentColor" d="M12.53 5.97a.75.75 0 0 0-1.06 0l-3.3 3.3a.75.75 0 1 0 1.06 1.06l2.02-2.02v8.187c-.534-.008-.865-.042-1.166-.18c-.397-.183-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214c-.3.138-.632.172-1.166.18V8.311l2.02 2.02a.75.75 0 1 0 1.06-1.061z"></svg:path>`,
})
export class SolarInboxOutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutBrokenIcon],svg[solar-inbox-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 10V2m0 0l3 3m-3-3L9 5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127m10 0c1.625.16 2.72.521 3.535 1.338c.974.973 1.3 2.342 1.41 4.535"></svg:path></svg:g>`,
})
export class SolarInboxOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutLineDuotoneIcon],svg[solar-inbox-out-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127"></svg:path><svg:path stroke-linejoin="round" d="M12 10V2m0 0l3 3m-3-3L9 5" opacity=".5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxOutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutLinearIcon],svg[solar-inbox-out-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127"></svg:path><svg:path stroke-linejoin="round" d="M12 10V2m0 0l3 3m-3-3L9 5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path></svg:g>`,
})
export class SolarInboxOutLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutOutlineIcon],svg[solar-inbox-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.47 1.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V10a.75.75 0 0 1-1.5 0V3.81L9.53 5.53a.75.75 0 0 1-1.06-1.06zm4.784.583a.75.75 0 0 1 .82-.673c1.69.167 2.994.556 3.992 1.554c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v1.087c-.004 1.852-.027 3.35-.19 4.556c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.163-1.207-.186-2.704-.19-4.556v-1.087c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.998-.998 2.302-1.387 3.993-1.554a.75.75 0 1 1 .146 1.493c-1.559.154-2.443.487-3.078 1.122c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.25h2.545c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.088.102l.605.706c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.605-.707l.088-.102c.502-.587.9-1.052 1.45-1.305c.55-.254 1.162-.253 1.935-.252h2.544V12c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.634-.634-1.519-.967-3.078-1.12a.75.75 0 0 1-.673-.82m4.993 11.697H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.753c.01 1.503.045 2.68.173 3.636c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.128-.956.163-2.133.172-3.636" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxOutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutlineIcon],svg[solar-inbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v1.087c-.004 1.852-.027 3.35-.19 4.556c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.163-1.207-.186-2.704-.19-4.556v-1.087c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-9.19 12.5c.01 1.503.045 2.68.173 3.636c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.128-.956.163-2.133.172-3.636H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115zm18.497-1.5h-2.544c-.773 0-1.385-.002-1.935.252c-.55.253-.948.718-1.45 1.305l-.088.102l-.605.706c-.634.74-.812.922-1.026 1.02c-.213.099-.468.115-1.442.115h-.32c-.974 0-1.229-.016-1.442-.114c-.214-.099-.392-.282-1.026-1.02l-.605-.707l-.088-.102c-.502-.587-.9-1.052-1.45-1.305c-.55-.254-1.162-.253-1.934-.252H2.75V12c0-2.378.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386z" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadBoldIcon],svg[solar-inbox-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304s1.162-.253 1.935-.252H22V12c0-1.122 0-2.11-.02-2.985a5 5 0 0 1-6.995-6.995C14.11 2 13.122 2 12 2"></svg:path>`,
})
export class SolarInboxUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadBoldDuotoneIcon],svg[solar-inbox-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M15.612 2.038C14.59 2 13.399 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535"></svg:path>`,
})
export class SolarInboxUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadBrokenIcon],svg[solar-inbox-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path><svg:path stroke-linecap="round" d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.079-.005-2M14 2.005Q13.079 2 12 2C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"></svg:path></svg:g>`,
})
export class SolarInboxUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadLineDuotoneIcon],svg[solar-inbox-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 2.005Q13.079 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.079-.005-2"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadLinearIcon],svg[solar-inbox-unread-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 2.005Q13.079 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.079-.005-2"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22"></svg:path></svg:g>`,
})
export class SolarInboxUnreadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadOutlineIcon],svg[solar-inbox-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.06q1.076-.001 2.003.005a.75.75 0 1 1-.012 1.5A242 242 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386v.25h2.545c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.088.102l.605.706c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.605-.707l.088-.102c.502-.587.9-1.052 1.45-1.305c.55-.254 1.162-.253 1.935-.252h2.544V12c0-.72 0-1.382-.005-1.994a.75.75 0 1 1 1.5-.012q.006.926.005 2.004v1.032c-.004 1.852-.027 3.35-.19 4.556c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.163-1.207-.186-2.704-.19-4.556v-1.087c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-9.19 12.5c.01 1.503.045 2.68.173 3.636c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.128-.956.163-2.133.172-3.636H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115zM19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBoldIcon],svg[solar-incognito-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.614 8.545l-.426 1.705H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2.187l-.427-1.705c-.546-2.183-.818-3.274-1.632-3.91C16.94 4 15.815 4 13.565 4h-3.13c-2.25 0-3.375 0-4.189.635c-.814.636-1.087 1.727-1.632 3.91M6.5 21a3.5 3.5 0 0 0 3.384-2.604l1.11-.555a2.25 2.25 0 0 1 2.012 0l1.11.555A3.501 3.501 0 0 0 21 17.5a3.5 3.5 0 0 0-6.91-.794l-.413-.206a3.75 3.75 0 0 0-3.354 0l-.413.206A3.501 3.501 0 0 0 3 17.5A3.5 3.5 0 0 0 6.5 21" clip-rule="evenodd"></svg:path>`,
})
export class SolarIncognitoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBoldDuotoneIcon],svg[solar-incognito-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 10A.75.75 0 0 1 2 9.25h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m4.188 9.25l.426-1.705c.545-2.183.818-3.274 1.632-3.91C7.06 3 8.185 3 10.435 3h3.13c2.25 0 3.375 0 4.189.635c.814.636 1.086 1.727 1.632 3.91l.427 1.705z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 16.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="currentColor" d="M9.884 17.397a3.5 3.5 0 0 0 .025-1.69l.414-.207a3.75 3.75 0 0 1 3.354 0l.413.206a3.5 3.5 0 0 0 .026 1.69l-1.11-.555a2.25 2.25 0 0 0-2.012 0z" opacity=".5"></svg:path>`,
})
export class SolarIncognitoBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBrokenIcon],svg[solar-incognito-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91c.76-.593 1.79-.632 3.754-.635m10 7l-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91c-.76-.593-1.79-.632-3.754-.635"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33"></svg:path></svg:g>`,
})
export class SolarIncognitoBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoLineDuotoneIcon],svg[solar-incognito-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h20"></svg:path><svg:path stroke-linecap="round" d="m4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635c.814.636 1.086 1.727 1.632 3.91L20 11" opacity=".5"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncognitoLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoLinearIcon],svg[solar-incognito-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h20M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635c.814.636 1.086 1.727 1.632 3.91L20 11"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33"></svg:path></svg:g>`,
})
export class SolarIncognitoLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoOutlineIcon],svg[solar-incognito-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.388 3.25h3.224c1.085 0 1.966 0 2.675.085c.74.088 1.374.276 1.928.71c.555.432.892 1.002 1.157 1.698c.254.667.467 1.522.73 2.574l.484 1.933H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.414l.484-1.933c.263-1.052.476-1.907.73-2.574c.266-.696.602-1.266 1.157-1.699c.554-.433 1.189-.62 1.928-.71c.709-.084 1.59-.084 2.675-.084m-5.427 7h14.078l-.38-1.523c-.278-1.11-.47-1.877-.69-2.45c-.21-.555-.418-.848-.677-1.05s-.594-.332-1.183-.403c-.61-.073-1.4-.074-2.544-.074h-3.13c-1.144 0-1.935.001-2.544.074c-.59.07-.924.2-1.183.403c-.26.202-.466.495-.678 1.05c-.218.573-.411 1.34-.689 2.45zm1.539 4.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M2.25 17.5a4.25 4.25 0 0 1 8.35-1.125a3.75 3.75 0 0 1 2.8 0a4.252 4.252 0 0 1 8.35 1.125a4.25 4.25 0 0 1-8.474.477l-.27-.135a2.25 2.25 0 0 0-2.012 0l-.27.135A4.25 4.25 0 0 1 2.25 17.5m15.25-2.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarIncognitoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallBoldIcon],svg[solar-incoming-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarIncomingCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallBoldDuotoneIcon],svg[solar-incoming-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallBrokenIcon],svg[solar-incoming-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarIncomingCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallLineDuotoneIcon],svg[solar-incoming-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallLinearIcon],svg[solar-incoming-call-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></svg:path></svg:g>`,
})
export class SolarIncomingCallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallOutlineIcon],svg[solar-incoming-call-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.986 3.476c-1.014-1.433-3.042-1.675-4.268-.384l-1.57 1.652c-.536.565-.943 1.348-.894 2.262c.1 1.85.884 5.634 5.018 9.985c4.429 4.664 8.654 4.898 10.478 4.718c.747-.073 1.352-.472 1.795-.939l1.42-1.495c1.305-1.374.925-3.673-.707-4.613l-1.911-1.1c-1.099-.632-2.46-.451-3.335.469l-.408.43a.6.6 0 0 1-.294.007c-.402-.066-1.27-.421-2.703-1.929c-1.428-1.503-1.78-2.429-1.846-2.884c-.032-.22 0-.336.013-.372l.003-.006l.244-.258c.968-1.018 1.036-2.612.226-3.76zm-3.18.649c.522-.55 1.443-.507 1.955.217l1.26 1.784c.423.597.358 1.391-.087 1.86l-.287.302l.532.505a26 26 0 0 0-.533-.503l-.002.001l-.003.003l-.006.007l-.013.015a1 1 0 0 0-.104.14c-.052.081-.109.19-.157.324c-.098.275-.15.638-.084 1.092c.13.893.715 2.092 2.242 3.7c1.523 1.604 2.673 2.234 3.55 2.376c.451.073.816.015 1.092-.094a1.5 1.5 0 0 0 .422-.251l.035-.033l.014-.014l.007-.006l.003-.004l.001-.001s.002-.002-.526-.502l.528.5l.455-.479c.385-.406.986-.497 1.499-.202l1.91 1.1c.821.472.982 1.634.369 2.28l-1.42 1.495c-.28.294-.572.452-.855.48c-1.435.141-5.18.02-9.244-4.259c-3.876-4.08-4.526-7.523-4.607-9.032c-.022-.4.152-.8.484-1.149z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 9.75a.75.75 0 1 0 0-1.5h-1.19l2.72-2.72a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 1 0-1.5 0v3c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarIncomingCallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedBoldIcon],svg[solar-incoming-call-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedBoldDuotoneIcon],svg[solar-incoming-call-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedBrokenIcon],svg[solar-incoming-call-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedLineDuotoneIcon],svg[solar-incoming-call-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedLinearIcon],svg[solar-incoming-call-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedOutlineIcon],svg[solar-incoming-call-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.693 4.95c-1.17-2.095-4.005-2.223-5.686-.543c-.898.899-1.697 2.093-1.75 3.498c-.079 2.08.459 5.536 3.88 8.958c3.422 3.421 6.877 3.959 8.958 3.88c1.405-.053 2.6-.852 3.498-1.75c1.68-1.68 1.552-4.516-.544-5.685l-1.163-.65c-1.368-.763-3.095-.438-4.227.68a.63.63 0 0 1-.337.104c-.256.012-.85-.079-1.767-.997c-.919-.918-1.01-1.511-.997-1.767a.63.63 0 0 1 .104-.337c1.118-1.132 1.443-2.859.68-4.227zm-4.625.518c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.452c-.07.07-.486.516-.524 1.307c-.04.81.324 1.792 1.434 2.902s2.09 1.474 2.901 1.434c.791-.038 1.237-.454 1.307-.524c.714-.713 1.73-.851 2.453-.448l1.163.65c1.074.598 1.32 2.208.214 3.314c-.775.775-1.63 1.28-2.494 1.312c-1.735.066-4.76-.363-7.84-3.442S4.69 9.697 4.756 7.962c.033-.863.537-1.72 1.312-2.494" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 9.75a.75.75 0 0 0 0-1.5h-1.19l2.72-2.72a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarIncomingCallRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBoldIcon],svg[solar-infinity-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.597 0 1.045-.107 1.407-.284c.362-.176.679-.442.986-.816c.54-.66.983-1.558 1.567-2.741q.175-.355.37-.744l.34-.69c.581-1.181 1.117-2.27 1.777-3.075c.41-.501.89-.923 1.49-1.215S16.216 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284c-.362.176-.679.442-.986.816c-.54.66-.983 1.558-1.567 2.741q-.175.355-.37.744l-.34.69c-.581 1.181-1.117 2.27-1.777 3.076c-.41.5-.89.922-1.49 1.214s-1.28.435-2.063.435A5.75 5.75 0 1 1 10.451 7.4a.75.75 0 1 1-.901 1.2A4.23 4.23 0 0 0 7 7.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfinityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBoldDuotoneIcon],svg[solar-infinity-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" opacity=".5"></svg:path>`,
})
export class SolarInfinityBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBrokenIcon],svg[solar-infinity-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8a5 5 0 0 0-6 8m10 0a5 5 0 0 0 6-8M7 17c2.761 0 3.5-2 5-5s2.239-5 5-5"></svg:path>`,
})
export class SolarInfinityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityLineDuotoneIcon],svg[solar-infinity-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8a5 5 0 1 0-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 1 1-3 9"></svg:path>`,
})
export class SolarInfinityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityLinearIcon],svg[solar-infinity-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8a5 5 0 1 0-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 1 1-3 9"></svg:path>`,
})
export class SolarInfinityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityOutlineIcon],svg[solar-infinity-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.597 0 1.045-.107 1.407-.284c.362-.176.679-.442.986-.816c.54-.66.983-1.558 1.567-2.741q.175-.355.37-.744l.34-.69c.581-1.181 1.117-2.27 1.777-3.075c.41-.501.89-.923 1.49-1.215S16.216 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284c-.362.176-.679.442-.986.816c-.54.66-.983 1.558-1.567 2.741q-.175.355-.37.744l-.34.69c-.581 1.181-1.117 2.27-1.777 3.076c-.41.5-.89.922-1.49 1.214s-1.28.435-2.063.435A5.75 5.75 0 1 1 10.451 7.4a.75.75 0 1 1-.901 1.2A4.23 4.23 0 0 0 7 7.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfinityOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleBoldIcon],svg[solar-info-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfoCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleBoldDuotoneIcon],svg[solar-info-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarInfoCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleBrokenIcon],svg[solar-info-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarInfoCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleLineDuotoneIcon],svg[solar-info-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle></svg:g>`,
})
export class SolarInfoCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleLinearIcon],svg[solar-info-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle></svg:g>`,
})
export class SolarInfoCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleOutlineIcon],svg[solar-info-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfoCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareBoldIcon],svg[solar-info-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-4.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfoSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareBoldDuotoneIcon],svg[solar-info-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarInfoSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareBrokenIcon],svg[solar-info-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarInfoSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareLineDuotoneIcon],svg[solar-info-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInfoSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareLinearIcon],svg[solar-info-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarInfoSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareOutlineIcon],svg[solar-info-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1 9.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfoSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBoldIcon],svg[solar-iphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 9.801v4.067c0 3.833 0 5.75-1.172 6.941S15.771 22 12 22s-5.657 0-6.828-1.191C4 19.619 4 17.701 4 13.868V9.8c0-3.833 0-5.75 1.172-6.94c.375-.383.825-.642 1.386-.819c.353-.11.728.047.942.35l.154.236c.634.97.855 1.307 1.368 1.631q.165.105.342.186c.591.274 1.273.274 2.636.274s2.044 0 2.636-.274q.177-.081.342-.186c.513-.324.734-.662 1.368-1.631l.154-.235c.2-.305.564-.467.91-.36c.577.176 1.036.438 1.418.827C20 4.051 20 5.968 20 9.801M9 18.23a.75.75 0 0 0-.75.755c0 .416.336.754.75.754h6c.414 0 .75-.338.75-.755a.75.75 0 0 0-.75-.754z" clip-rule="evenodd"></svg:path>`,
})
export class SolarIphoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBoldDuotoneIcon],svg[solar-iphone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9.801v4.067c0 3.833 0 5.75-1.172 6.941S15.771 22 12 22s-5.657 0-6.828-1.191C4 19.619 4 17.701 4 13.868V9.8c0-3.833 0-5.75 1.172-6.94c.375-.383.825-.642 1.386-.819c.353-.11.728.047.942.35l.154.236c.634.97.855 1.307 1.368 1.631q.165.105.342.186c.591.274 1.273.274 2.636.274s2.044 0 2.636-.274q.177-.081.342-.186c.513-.324.734-.662 1.368-1.631l.154-.235c.2-.305.564-.467.91-.36c.577.176 1.036.438 1.418.827C20 4.051 20 5.968 20 9.801" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 18.984c0-.417.336-.755.75-.755h6c.414 0 .75.338.75.755a.75.75 0 0 1-.75.754H9a.75.75 0 0 1-.75-.754"></svg:path>`,
})
export class SolarIphoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBrokenIcon],svg[solar-iphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5 9H9"></svg:path><svg:path d="m16.748 2.378l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"></svg:path></svg:g>`,
})
export class SolarIphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneLineDuotoneIcon],svg[solar-iphone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" d="M15 19H9m7.748-16.622l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIphoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneLinearIcon],svg[solar-iphone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" d="M15 19H9m7.748-16.622l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044q-.165.103-.341.183c-.592.27-1.274.27-2.637.27s-2.044 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"></svg:path></svg:g>`,
})
export class SolarIphoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneOutlineIcon],svg[solar-iphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-5.13 1.823c-.489.146-.834.351-1.112.629c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.278-.278-.623-.483-1.112-.629c-.662.994-1.124 1.685-1.812 2.112q-.207.128-.427.229c-.742.337-1.58.337-2.787.336h-.32c-1.207 0-2.045.001-2.787-.336a4 4 0 0 1-.427-.229c-.688-.427-1.15-1.118-1.812-2.112m1.637-.257c.444.644.677.915.967 1.095q.123.077.256.137c.41.186.894.202 2.326.202s1.917-.016 2.326-.202q.132-.06.256-.137c.29-.18.523-.451.967-1.095c-.92-.065-2.068-.066-3.549-.066s-2.628.001-3.549.066M8.25 19a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarIphoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2BoldIcon],svg[solar-jar-of-pills-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.366 16.179l.512-.512c.916-.916 2.432-.885 3.386.07c.954.953.985 2.469.069 3.385l-.512.512a5 5 0 0 0-.168-.377a6.5 6.5 0 0 0-1.232-1.678a6.5 6.5 0 0 0-1.678-1.232a5 5 0 0 0-.377-.168m-1.226 1.226l-.473.473c-.916.916-.885 2.432.07 3.386c.953.954 2.469.985 3.385.069l.473-.473l-.1-.47l-.003-.011l-.026-.084a3 3 0 0 0-.156-.37a5 5 0 0 0-.95-1.285c-.5-.501-.962-.79-1.285-.95a3 3 0 0 0-.454-.182l-.011-.003zM6.076 2.617C6 2.801 6 3.034 6 3.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 5 7.034 5 7.5 5h9c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C18 4.199 18 3.966 18 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 2 16.966 2 16.5 2h-9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M7.75 6L5.501 7.799a4 4 0 0 0-1.135 1.45H19.64a4 4 0 0 0-1.123-1.45L16.294 6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 10.908q0-.079-.003-.158H4.004L4 10.922v6.328h9.234q.166-.226.373-.433l2.21-2.21c1.144-1.144 2.795-1.377 4.183-.812zm-7.25 2.342V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.573 18.75a3.98 3.98 0 0 0 .812 3.25H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842a4 4 0 0 1-.743-1.363z"></svg:path>`,
})
export class SolarJarOfPills2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2BoldDuotoneIcon],svg[solar-jar-of-pills-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m15.878 15.667l-2.21 2.211c-.917.916-.886 2.432.068 3.386s2.47.985 3.386.069l2.21-2.211c.917-.916.886-2.432-.068-3.386s-2.47-.985-3.386-.069" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 5L5.501 7.799A4 4 0 0 0 4.108 10h15.788a4 4 0 0 0-1.379-2.2L16.16 5.89L15.018 5zM4.927 20.113A4 4 0 0 1 4.025 18h7.78c-.56 1.31-.336 2.86.58 4H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.152-1.008c-.202-.184-.385-.404-.75-.842"></svg:path><svg:path fill="currentColor" d="M4 17.552v-6.63q0-.471.108-.922h15.787q.105.444.105.908v3.476c-1.511-1.215-3.747-1.213-5.182.222l-2.211 2.211c-.354.354-.62.756-.803 1.183H4.025A4 4 0 0 1 4 17.552" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.82 19.634a5 5 0 0 0-.168-.377a6.5 6.5 0 0 0-1.231-1.678a6.5 6.5 0 0 0-1.678-1.232a5 5 0 0 0-.377-.168l-1.226 1.226l.47.1l.01.003q.024.006.085.026c.08.027.208.076.37.156c.323.161.785.45 1.285.95s.789.962.95 1.285a3 3 0 0 1 .182.454l.003.011l.1.47z"></svg:path>`,
})
export class SolarJarOfPills2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2BrokenIcon],svg[solar-jar-of-pills-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 4.199 4 3.966 4 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 18h8m0 4H6.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 2 17.552V17m16-4.5v-1.592A4 4 0 0 0 16.517 7.8L14.16 5.891c-.545-.441-.818-.662-1.142-.776C12.694 5 12.344 5 11.643 5h-3.24c-.695 0-1.042 0-1.363.113c-.322.112-.593.33-1.136.764L3.501 7.799A4 4 0 0 0 2 10.922V13m8-1v4m-2-2h4"></svg:path><svg:path d="M14.773 16.773s.992.21 2.118 1.336s1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068s-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 10h3.75m11.25 0H10"></svg:path></svg:g>`,
})
export class SolarJarOfPills2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2LineDuotoneIcon],svg[solar-jar-of-pills-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 4.199 4 3.966 4 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 18h8m-8-8h15" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10.5 22H6.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 2 17.552v-6.63A4 4 0 0 1 3.501 7.8l2.403-1.922c.543-.434.814-.652 1.136-.764C7.36 5 7.708 5 8.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.141.776l2.358 1.908A4 4 0 0 1 18 10.91v1.59m-8-.5v4m-2-2h4"></svg:path><svg:path d="M14.773 16.773s.992.21 2.118 1.336s1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068s-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068Z"></svg:path></svg:g>`,
})
export class SolarJarOfPills2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2LinearIcon],svg[solar-jar-of-pills-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 4.199 4 3.966 4 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 18h8m-8-8h15m-7 12H6.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 2 17.552v-6.63A4 4 0 0 1 3.501 7.8l2.403-1.922c.543-.434.814-.652 1.136-.764C7.36 5 7.708 5 8.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.141.776l2.358 1.908A4 4 0 0 1 18 10.91v1.59m-8-.5v4m-2-2h4"></svg:path><svg:path d="M14.773 16.773s.992.21 2.118 1.336s1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068s-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068Z"></svg:path></svg:g>`,
})
export class SolarJarOfPills2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2OutlineIcon],svg[solar-jar-of-pills-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.478 1.25c-.214 0-.41 0-.576.011c-.178.012-.373.04-.572.122a1.75 1.75 0 0 0-.947.947c-.082.199-.11.394-.122.572c-.011.165-.011.362-.011.576v.044c0 .214 0 .41.011.576c.012.178.04.373.122.572c.178.428.519.77.947.947c.19.078.377.107.548.12L3.033 7.213a4.75 4.75 0 0 0-1.783 3.71v6.629a4.75 4.75 0 0 0 1.101 3.04l.035.043c.332.398.546.655.786.874a4.75 4.75 0 0 0 2.556 1.197c.322.044.655.044 1.174.044H10.5a.75.75 0 0 0 0-1.5H6.957c-.592 0-.817-.002-1.025-.03a3.25 3.25 0 0 1-1.75-.82c-.154-.14-.3-.313-.679-.768a3.3 3.3 0 0 1-.524-.882H10.5a.75.75 0 0 0 0-1.5H2.75v-6.328q0-.086.005-.172h14.491q.004.079.004.158V12.5a.75.75 0 0 0 1.5 0v-1.592a4.75 4.75 0 0 0-1.761-3.692l-1.831-1.482a1.7 1.7 0 0 0 .512-.117a1.75 1.75 0 0 0 .947-.947c.082-.199.11-.394.122-.572c.011-.165.011-.362.011-.576v-.044c0-.214 0-.41-.011-.576a1.8 1.8 0 0 0-.122-.572a1.75 1.75 0 0 0-.947-.947a1.8 1.8 0 0 0-.572-.122c-.165-.011-.362-.011-.576-.011zm6.165 4.5h-3.24c-.746 0-.942.01-1.115.07s-.333.176-.915.642L3.97 8.385c-.306.244-.56.538-.757.865h13.582a3.3 3.3 0 0 0-.75-.868l-2.357-1.908c-.586-.474-.746-.59-.92-.652s-.373-.072-1.125-.072m.299-1.5H14.5c.243 0 .388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496s0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008h-9c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103a8 8 0 0 0-.008.496c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 11.25a.75.75 0 0 1 .75.75v1.25H12a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H8a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.794 15.206c-1.226-1.226-3.217-1.298-4.446-.07l-2.211 2.212c-1.23 1.229-1.157 3.22.069 4.446s3.217 1.298 4.446.07l2.211-2.212c1.23-1.229 1.157-3.22-.069-4.446m-3.386.992c.603-.603 1.644-.613 2.325.069s.672 1.722.07 2.325l-.331.33a6.7 6.7 0 0 0-1.05-1.343a6.7 6.7 0 0 0-1.344-1.05zm.902 3.727l.051.108l-.77.77c-.602.602-1.643.612-2.324-.07c-.682-.681-.672-1.722-.07-2.325l.77-.77l.108.052c.323.16.785.449 1.285.95c.501.5.79.962.95 1.285" clip-rule="evenodd"></svg:path>`,
})
export class SolarJarOfPills2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsBoldIcon],svg[solar-jar-of-pills-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.076 2.617C6 2.801 6 3.034 6 3.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 5 7.034 5 7.5 5h9c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C18 4.199 18 3.966 18 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 2 16.966 2 16.5 2h-9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M7.75 6L5.501 7.799a4 4 0 0 0-1.135 1.45H19.64a4 4 0 0 0-1.123-1.45L16.294 6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 10.908q0-.079-.003-.158H4.004L4 10.922v6.328h16zm-7.25 2.342V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.927 20.113a4 4 0 0 1-.743-1.363H19.82a4 4 0 0 1-.732 1.358l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842"></svg:path>`,
})
export class SolarJarOfPillsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsBoldDuotoneIcon],svg[solar-jar-of-pills-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5m-2 7.423v6.629a4 4 0 0 0 .025.448h15.951q.024-.217.024-.435v-6.657q0-.464-.105-.908H4.108Q4 10.451 4 10.922" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.501 7.799L9.001 5h6.017l1.142.891l2.357 1.908A4 4 0 0 1 19.896 10H4.108a4 4 0 0 1 1.393-2.201M4.025 18a4 4 0 0 0 .902 2.113c.366.438.549.658.75.842a4 4 0 0 0 2.153 1.008C8.1 22 8.386 22 8.957 22h6.685a4 4 0 0 0 3.088-1.457l.358-.435A4 4 0 0 0 19.977 18z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarJarOfPillsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsBrokenIcon],svg[solar-jar-of-pills-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 18h15m-15-8h3.75m11.25 0H12m8 .908A4 4 0 0 0 18.517 7.8L16.16 5.891c-.545-.441-.818-.662-1.142-.776C14.694 5 14.344 5 13.643 5h-3.24c-.695 0-1.042 0-1.363.113c-.322.112-.593.33-1.136.764L5.501 7.799A4 4 0 0 0 4 10.922V12.5M20 15v2.565a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552V16.5m8-4.5v4m-2-2h4"></svg:path></svg:g>`,
})
export class SolarJarOfPillsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsLineDuotoneIcon],svg[solar-jar-of-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 18h15m-15-8h15" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m5.501 7.799l2.403-1.922c.543-.434.814-.652 1.136-.764C9.36 5 9.708 5 10.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.142.776l2.357 1.908A4 4 0 0 1 20 10.91v6.656a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552v-6.63A4 4 0 0 1 5.501 7.8ZM12 12v4m-2-2h4"></svg:path></svg:g>`,
})
export class SolarJarOfPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsLinearIcon],svg[solar-jar-of-pills-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 18h15m-15-8h15M5.501 7.799l2.403-1.922c.543-.434.814-.652 1.136-.764C9.36 5 9.708 5 10.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.142.776l2.357 1.908A4 4 0 0 1 20 10.91v6.656a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552v-6.63A4 4 0 0 1 5.501 7.8ZM12 12v4m-2-2h4"></svg:path></svg:g>`,
})
export class SolarJarOfPillsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsOutlineIcon],svg[solar-jar-of-pills-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.478 1.25h9.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.428.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947a1.7 1.7 0 0 1-.512.117l1.83 1.482a4.75 4.75 0 0 1 1.762 3.692v6.657a4.75 4.75 0 0 1-1.083 3.02l-.359.435a4.75 4.75 0 0 1-3.666 1.73h-6.74c-.519 0-.852 0-1.174-.044a4.75 4.75 0 0 1-2.556-1.197c-.24-.22-.454-.476-.786-.874l-.035-.042a4.75 4.75 0 0 1-1.101-3.041v-6.63a4.75 4.75 0 0 1 1.783-3.709l1.845-1.476a1.8 1.8 0 0 1-.548-.12a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-.044c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011m2.925 4.5h3.24c.752 0 .95.01 1.125.072c.174.061.334.178.92.652l2.357 1.908c.303.246.556.54.75.868H5.213c.197-.327.452-.621.757-.865l2.403-1.923c.582-.466.742-.58.915-.642c.173-.06.37-.07 1.115-.07m-5.648 5h14.491q.004.079.004.158v6.342H4.75v-6.328q0-.086.005-.172m.224 8h14.047a3.3 3.3 0 0 1-.517.881l-.358.435a3.25 3.25 0 0 1-2.51 1.184H8.958c-.592 0-.817-.002-1.025-.03a3.25 3.25 0 0 1-1.75-.82c-.154-.14-.3-.313-.679-.768a3.3 3.3 0 0 1-.524-.882M16.5 4.25h-9c-.243 0-.388 0-.496-.008A1 1 0 0 1 6.9 4.23a.25.25 0 0 1-.13-.131a1 1 0 0 1-.013-.103A8 8 0 0 1 6.75 3.5c0-.243 0-.388.008-.496A1 1 0 0 1 6.77 2.9a.25.25 0 0 1 .131-.13a1 1 0 0 1 .103-.013c.108-.008.253-.008.496-.008h9c.243 0 .388 0 .496.008c.067.004.095.01.103.012a.25.25 0 0 1 .13.131a1 1 0 0 1 .013.103c.008.108.008.253.008.496s0 .388-.008.496a1 1 0 0 1-.012.103a.25.25 0 0 1-.131.13a1 1 0 0 1-.103.013a8 8 0 0 1-.496.008" clip-rule="evenodd"></svg:path>`,
})
export class SolarJarOfPillsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyBoldIcon],svg[solar-key-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.519.517-.379.669-.148.919c.096.105.208.226.295.399c0 0 .735 1.024 0 2.049c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294S22 4.818 22 8.293m-6.319 2.196a2.2 2.2 0 0 0 2.204-2.195a2.2 2.2 0 0 0-2.204-2.196a2.2 2.2 0 0 0-2.204 2.196a2.2 2.2 0 0 0 2.204 2.195" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyBoldDuotoneIcon],svg[solar-key-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.519.517-.379.669-.148.919c.096.105.208.226.295.399c0 0 .735 1.024 0 2.049c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294S22 4.818 22 8.293" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196"></svg:path>`,
})
export class SolarKeyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyBrokenIcon],svg[solar-key-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.067 5c.592.958.933 2.086.933 3.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.735.732-.147.732.147 1.317c0 0 .735 1.025 0 2.05c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294c.819 0 1.601.155 2.319.437"></svg:path><svg:path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.205-2.195a2.2 2.2 0 0 1 2.205-2.196a2.2 2.2 0 0 1 2.204 2.196Z"></svg:path></svg:g>`,
})
export class SolarKeyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyLineDuotoneIcon],svg[solar-key-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294S19.17 2 15.68 2S9.363 4.818 9.363 8.293c0 1.61.734 2.781.734 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439 2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.406 2.645.586 3.086 0c.735-1.024 0-2.049 0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"></svg:path><svg:path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.205-2.195a2.2 2.2 0 0 1 2.205-2.196a2.2 2.2 0 0 1 2.204 2.196Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyLinearIcon],svg[solar-key-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294S19.17 2 15.68 2S9.363 4.818 9.363 8.293c0 1.61.734 2.781.734 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439 2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.406 2.645.586 3.086 0c.735-1.024 0-2.049 0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"></svg:path><svg:path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196Z"></svg:path></svg:g>`,
})
export class SolarKeyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BoldIcon],svg[solar-key-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 16a7 7 0 1 0-5.452-2.609L3.97 18.97l-1 1a.75.75 0 1 0 1.06 1.061l.47-.47l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.94-.94l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l3.049-3.048A6.97 6.97 0 0 0 15 16m0-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BoldDuotoneIcon],svg[solar-key-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.609 14.452a7 7 0 0 1-1.06-1.06l-6.58 6.578a.75.75 0 1 0 1.061 1.06l.47-.47l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.94-.94l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97z" opacity=".5"></svg:path>`,
})
export class SolarKeyMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BrokenIcon],svg[solar-key-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.064 12.5A7 7 0 1 0 18 15.326"></svg:path><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2LineDuotoneIcon],svg[solar-key-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="7"></svg:circle><svg:circle cx="15" cy="9" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2LinearIcon],svg[solar-key-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="7"></svg:circle><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2OutlineIcon],svg[solar-key-minimalistic-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5M7.25 9a7.75 7.75 0 1 1 2.824 5.983l-.044.047l-2.47 2.47l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.94.94l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.47.47a.75.75 0 0 1-1.06-1.06l1-1l5-5l.047-.044A7.72 7.72 0 0 1 7.25 9M15 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalistic2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticBoldIcon],svg[solar-key-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71l-1.747-1.728a.75.75 0 1 1 1.055-1.066l1.752 1.733l1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806m-6.391-6.204a2 2 0 1 1 2.828 2.828a2 2 0 0 1-2.828-2.828" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticBoldDuotoneIcon],svg[solar-key-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71l1.06-1.061l1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.414 8.586a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828M6.583 18.13l1.746 1.727l1.06-1.061l-1.751-1.733a.75.75 0 1 0-1.055 1.066"></svg:path>`,
})
export class SolarKeyMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticBrokenIcon],svg[solar-key-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.977 5.023l.53-.53zm0 9.767l.53.53zM7.146 12.668l-.53-.53zM3.433 16.38l.53.53zm4.187 4.187l-.53-.53zm3.712-3.713l-.53-.53zm-8.323.736l-.745.083zm.232 2.089l-.745.083zm1.08 1.08l-.083.745zm2.089.232l.082-.745zm-2.886-.723l.53-.53zm.208.208l-.53.53zm3.672-8.845l-.726.187zm4.965 4.965l-.187.726zm-4.73.467a.75.75 0 1 0-1.055 1.066zm12.373-8.857a.75.75 0 1 0 1.442-.412zm1.38 4.02a.75.75 0 0 0-1.43-.453zm-8.276-1.342a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0zm3.563-3.563a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0zM6.615 12.138L2.903 15.85l1.06 1.06l3.714-3.71zm1.535 8.959l1.24-1.24l-1.06-1.061l-1.24 1.24zm1.24-1.24l2.472-2.472l-1.06-1.061l-2.472 2.472zm-7.126-2.184l.232 2.089l1.49-.166l-.232-2.088zm1.974 3.831l2.089.232l.165-1.49l-2.088-.232zm-1.244-.706l.208.208l1.06-1.06l-.208-.209zm1.41-.784a.24.24 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.24.24 0 0 1-.067-.142zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64zM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597zm5.228-4.405A6.15 6.15 0 0 1 9.74 5.553l-1.06-1.06a7.65 7.65 0 0 0-2.002 7.325zm10.316 2.815a6.15 6.15 0 0 1-5.892 1.61l-.373 1.452a7.65 7.65 0 0 0 7.325-2.001zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32zm1.711 5.594l-1.749-1.73l-1.054 1.066l1.749 1.73zm9.06-13.24a6.1 6.1 0 0 1 1.565 2.653l1.442-.412a7.6 7.6 0 0 0-1.947-3.301zm1.515 6.22a6.1 6.1 0 0 1-1.515 2.487l1.06 1.06a7.6 7.6 0 0 0 1.885-3.093z"></svg:path>`,
})
export class SolarKeyMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticLineDuotoneIcon],svg[solar-key-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.977 5.023l.53-.53zm0 9.767l.53.53zM7.146 12.668l-.53-.53zM3.433 16.38l.53.53zm4.187 4.187l-.53-.53zm1.24-1.24l-.53-.531zm2.472-2.473l-.53-.53zm-8.323.736l-.745.083zm.232 2.089l-.745.083zm1.08 1.08l-.083.745zm2.089.232l.082-.745zm-2.886-.723l.53-.53zm.208.208l-.53.53zm3.672-8.845l-.726.187zm4.965 4.965l-.187.726zm6.078-11.043a6.157 6.157 0 0 1 0 8.707l1.06 1.06a7.657 7.657 0 0 0 0-10.827zm1.06-1.06a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0zM6.615 12.138L2.903 15.85l1.06 1.06l3.714-3.71zm1.535 8.959l1.24-1.24l-1.06-1.061l-1.24 1.24zm1.24-1.24l2.472-2.472l-1.06-1.061l-2.472 2.472zm-7.126-2.184l.232 2.089l1.49-.166l-.232-2.088zm1.974 3.831l2.089.232l.165-1.49l-2.088-.232zm-1.244-.706l.208.208l1.06-1.06l-.208-.209zm1.41-.784a.24.24 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.24.24 0 0 1-.067-.142zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64zM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597zm5.228-4.405A6.15 6.15 0 0 1 9.74 5.553l-1.06-1.06a7.65 7.65 0 0 0-2.002 7.325zm10.316 2.815a6.15 6.15 0 0 1-5.892 1.61l-.373 1.452a7.65 7.65 0 0 0 7.325-2.001zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32z"></svg:path><svg:path fill="currentColor" d="M8.332 19.86a.75.75 0 1 0 1.055-1.067zm-.694-2.797a.75.75 0 1 0-1.055 1.066zm1.75 1.73l-1.75-1.73l-1.055 1.066l1.75 1.73zm3.728-7.909a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0z" opacity=".5"></svg:path>`,
})
export class SolarKeyMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticLinearIcon],svg[solar-key-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.977 5.023l.53-.53zm0 9.767l.53.53zM7.146 12.668l-.53-.53zM3.433 16.38l.53.53zm4.187 4.187l-.53-.53zm3.712-3.713l-.53-.53zm-8.323.736l-.745.083zm.232 2.089l-.745.083zm1.08 1.08l-.083.745zm2.089.232l.082-.745zm-2.886-.723l.53-.53zm.208.208l-.53.53zm3.672-8.845l-.726.187zm4.965 4.965l-.187.726zm-4.73.467a.75.75 0 1 0-1.055 1.066zm5.477-6.18a1.25 1.25 0 0 1 0-1.767l-1.06-1.06a2.75 2.75 0 0 0 0 3.889zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.062a2.75 2.75 0 0 0 3.889 0zm0-1.767a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0zm2.503-2.503a6.157 6.157 0 0 1 0 8.707l1.06 1.06a7.657 7.657 0 0 0 0-10.827zm1.06-1.06a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0zM6.615 12.138L2.903 15.85l1.06 1.06l3.714-3.71zm1.535 8.959l1.24-1.24l-1.06-1.061l-1.24 1.24zm1.24-1.24l2.472-2.472l-1.06-1.061l-2.472 2.472zm-7.126-2.184l.232 2.089l1.49-.166l-.232-2.088zm1.974 3.831l2.089.232l.165-1.49l-2.088-.232zm-1.244-.706l.208.208l1.06-1.06l-.208-.209zm1.41-.784a.24.24 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.24.24 0 0 1-.067-.142zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64zM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597zm5.228-4.405A6.15 6.15 0 0 1 9.74 5.553l-1.06-1.06a7.65 7.65 0 0 0-2.002 7.325zm10.316 2.815a6.15 6.15 0 0 1-5.892 1.61l-.373 1.452a7.65 7.65 0 0 0 7.325-2.001zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32zm1.711 5.594l-1.749-1.73l-1.054 1.066l1.749 1.73z"></svg:path>`,
})
export class SolarKeyMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticOutlineIcon],svg[solar-key-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.68 4.493a7.657 7.657 0 1 1 3.502 12.83c-.15-.04-.264.006-.32.061L8.15 21.098a2.23 2.23 0 0 1-1.823.64l-2.089-.233a1.74 1.74 0 0 1-1.036-.498l-.208-.208a1.74 1.74 0 0 1-.498-1.036l-.232-2.089a2.23 2.23 0 0 1 .64-1.823l3.711-3.712c.056-.056.101-.17.063-.32a7.65 7.65 0 0 1 2.001-7.325m9.767 1.06A6.157 6.157 0 0 0 8.13 11.445c.15.588.028 1.271-.455 1.754L3.964 16.91a.73.73 0 0 0-.21.597l.233 2.088c.005.054.03.103.067.141l.209.209a.24.24 0 0 0 .14.067l2.09.232a.73.73 0 0 0 .596-.209l.707-.707l-1.212-1.2a.75.75 0 1 1 1.054-1.066l1.219 1.205l1.945-1.944c.482-.483 1.165-.606 1.753-.455a6.157 6.157 0 0 0 5.891-10.316m-6.391 2.502a2.75 2.75 0 1 1 3.889 3.89a2.75 2.75 0 0 1-3.89-3.89m2.828 1.061a1.25 1.25 0 1 0-1.768 1.768a1.25 1.25 0 0 0 1.768-1.768" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2BoldIcon],svg[solar-key-minimalistic-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.62 18.98a3.23 3.23 0 0 0 2.644-.927l2.655-2.655A7.75 7.75 0 0 0 22 12.955c-.006 4.084-.101 6.218-1.463 7.58C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.827 2.102 6.961 2.007 11.045 2a7.75 7.75 0 0 0-2.443 7.08l-2.655 2.656a3.23 3.23 0 0 0-.927 2.643l.193 1.741c.071.637.356 1.23.81 1.684l.173.174a2.82 2.82 0 0 0 1.684.809z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.963 8.412a5.73 5.73 0 0 1-1.649 3.413a5.75 5.75 0 0 1-5.507 1.505a.9.9 0 0 0-.864.215l-1.53 1.53l-.002-.003l-1.458-1.442a.75.75 0 0 0-1.055 1.067l1.455 1.438l-.503.504a1.23 1.23 0 0 1-1.009.353l-1.74-.193a.82.82 0 0 1-.49-.236l-.174-.173a.82.82 0 0 1-.236-.49l-.193-1.741a1.23 1.23 0 0 1 .353-1.009l3.094-3.093a.9.9 0 0 0 .215-.864a5.75 5.75 0 0 1 1.505-5.507a5.73 5.73 0 0 1 3.413-1.649c.906.034 1.68.097 2.348.216c.87.267 1.69.744 2.378 1.433a5.7 5.7 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.348m-6.975-1.757a1.667 1.667 0 1 1 2.357 2.357a1.667 1.667 0 0 1-2.357-2.357" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2BoldDuotoneIcon],svg[solar-key-minimalistic-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.963 8.413a5.73 5.73 0 0 1-1.649 3.413a5.75 5.75 0 0 1-5.507 1.504a.9.9 0 0 0-.864.215l-1.53 1.53l-.002-.003l-1.458-1.441a.75.75 0 1 0-1.055 1.066l1.455 1.439l-.503.503a1.23 1.23 0 0 1-1.009.354l-1.74-.194a.82.82 0 0 1-.49-.235l-.174-.174a.82.82 0 0 1-.236-.49l-.193-1.741a1.23 1.23 0 0 1 .353-1.008l3.094-3.094a.9.9 0 0 0 .215-.864a5.75 5.75 0 0 1 1.505-5.507a5.73 5.73 0 0 1 3.413-1.648c.906.033 1.68.096 2.348.215a5.7 5.7 0 0 1 2.378 1.433a5.7 5.7 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.349m-6.975-1.758a1.667 1.667 0 1 1 2.357 2.357a1.667 1.667 0 0 1-2.357-2.357" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2BrokenIcon],svg[solar-key-minimalistic-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.314 3.686l.53-.53zm0 8.14l.53.53zm-9.86-1.769l-.53-.53zM7.362 13.15l.53.53zm3.489 3.489l-.53-.53zm3.093-3.094l-.53-.53zm-6.935.614l-.746.082zm.193 1.74l-.745.083zm.9.9l-.083.745zm1.74.193l.083-.745zm-2.404-.602l.53-.53zm.173.173l-.53.53zm3.06-7.37l-.726.186zm4.137 4.137l-.186.726zm-3.854.3a.75.75 0 0 0-1.055 1.067zm4.566-5.148a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.417zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.418zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0zm1.909-1.909a5.006 5.006 0 0 1 0 7.079l1.06 1.06a6.506 6.506 0 0 0 0-9.2zm1.06-1.06a6.506 6.506 0 0 0-9.2 0l1.061 1.06a5.006 5.006 0 0 1 7.079 0zm-10.92 6.37L6.831 12.62l1.06 1.06l3.094-3.093zm1.456 7.643l1.034-1.034l-1.061-1.06l-1.034 1.033zm1.034-1.034l2.06-2.06l-1.061-1.06l-2.06 2.06zm-6.152-1.894l.194 1.741l1.49-.166l-.193-1.74zm1.756 3.303l1.74.194l.166-1.491l-1.74-.193zm-1.112-.624l.174.174l1.06-1.061l-.173-.174zm1.278-.866a.07.07 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.07.07 0 0 1-.02-.044zm3.863.126a.48.48 0 0 1-.395.139l-.165 1.49a1.98 1.98 0 0 0 1.621-.568zM6.831 12.62a1.98 1.98 0 0 0-.569 1.622l1.491-.166a.48.48 0 0 1 .139-.395zm4.566-3.614a5 5 0 0 1 1.308-4.79l-1.06-1.06a6.5 6.5 0 0 0-1.701 6.223zm8.387 2.289a5 5 0 0 1-4.79 1.308l-.373 1.453a6.5 6.5 0 0 0 6.224-1.7zm-5.31 2.78a.1.1 0 0 1 .044-.022a.2.2 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412zm-3.489-3.488c.438-.437.547-1.054.412-1.58l-1.453.372q.014.061.003.103a.1.1 0 0 1-.023.045zm1.426 4.485l-1.458-1.442l-1.055 1.067l1.458 1.441z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 11.99c0 4.719 0 7.078 1.466 8.544S7.29 22 12.01 22s7.078 0 8.544-1.466c1.115-1.115 1.382-2.747 1.446-5.541M9.007 2c-2.794.064-4.426.33-5.541 1.446c-.977.977-1.303 2.35-1.412 4.554"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2LineDuotoneIcon],svg[solar-key-minimalistic-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.314 3.686l.53-.53zm0 8.14l.53.53zm-8.14-8.14l.531.53zm-1.72 6.371l-.53-.53zM7.362 13.15l.53.53zm3.489 3.489l-.53-.53zm1.033-1.034l.53.53zm2.06-2.06l-.53-.53zm-6.935.614l-.746.082zm.193 1.74l-.745.083zm.9.9l-.083.745zm1.74.193l.083-.745zm-2.404-.602l.53-.53zm.173.173l-.53.53zm3.06-7.37l-.726.186zm4.137 4.137l-.186.726zm-3.854.3a.75.75 0 0 0-1.055 1.067zm8.83-9.414a5.006 5.006 0 0 1 0 7.079l1.062 1.06a6.506 6.506 0 0 0 0-9.2zm1.062-1.06a6.506 6.506 0 0 0-9.2 0l1.06 1.06a5.006 5.006 0 0 1 7.079 0zm-10.92 6.37L6.83 12.62l1.06 1.06l3.094-3.093zm1.455 7.643l1.034-1.034l-1.061-1.06l-1.034 1.033zm1.034-1.034l2.06-2.06l-1.061-1.06l-2.06 2.06zm-6.152-1.894l.194 1.741l1.49-.166l-.193-1.74zm1.756 3.303l1.74.194l.166-1.491l-1.74-.193zm-1.112-.624l.174.174l1.06-1.061l-.173-.174zm1.278-.866a.07.07 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.07.07 0 0 1-.02-.044zm3.863.126a.48.48 0 0 1-.395.139l-.165 1.49a1.98 1.98 0 0 0 1.621-.568zM6.831 12.62a1.98 1.98 0 0 0-.569 1.622l1.491-.166a.48.48 0 0 1 .139-.395zm4.566-3.614a5 5 0 0 1 1.308-4.79l-1.06-1.06a6.5 6.5 0 0 0-1.701 6.223zm8.387 2.289a5 5 0 0 1-4.79 1.308l-.373 1.453a6.5 6.5 0 0 0 6.224-1.7zm-5.31 2.78a.1.1 0 0 1 .044-.022a.2.2 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412zm-3.489-3.488c.438-.437.547-1.054.412-1.58l-1.453.372q.014.061.003.103a.1.1 0 0 1-.023.045zm1.426 4.485l-1.458-1.442l-1.055 1.067l1.458 1.441z"></svg:path><svg:path fill="currentColor" d="M15.519 8.482a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.418zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.417zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466S2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2LinearIcon],svg[solar-key-minimalistic-square-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.314 3.686l.53-.53zm0 8.14l.53.53zm-9.86-1.769l-.53-.53zM7.362 13.15l.53.53zm3.489 3.489l-.53-.53zm3.093-3.094l-.53-.53zm-6.935.614l-.746.082zm.193 1.74l-.745.083zm.9.9l-.083.745zm1.74.193l.083-.745zm-2.404-.602l.53-.53zm.173.173l-.53.53zm3.06-7.37l-.726.186zm4.137 4.137l-.186.726zm-3.854.3a.75.75 0 0 0-1.055 1.067zm4.566-5.148a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.417zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.418zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0zm1.909-1.909a5.006 5.006 0 0 1 0 7.079l1.06 1.06a6.506 6.506 0 0 0 0-9.2zm1.06-1.06a6.506 6.506 0 0 0-9.2 0l1.061 1.06a5.006 5.006 0 0 1 7.079 0zm-10.92 6.37L6.831 12.62l1.06 1.06l3.094-3.093zm1.456 7.643l1.034-1.034l-1.061-1.06l-1.034 1.033zm1.034-1.034l2.06-2.06l-1.061-1.06l-2.06 2.06zm-6.152-1.894l.194 1.741l1.49-.166l-.193-1.74zm1.756 3.303l1.74.194l.166-1.491l-1.74-.193zm-1.112-.624l.174.174l1.06-1.061l-.173-.174zm1.278-.866a.07.07 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.07.07 0 0 1-.02-.044zm3.863.126a.48.48 0 0 1-.395.139l-.165 1.49a1.98 1.98 0 0 0 1.621-.568zM6.831 12.62a1.98 1.98 0 0 0-.569 1.622l1.491-.166a.48.48 0 0 1 .139-.395zm4.566-3.614a5 5 0 0 1 1.308-4.79l-1.06-1.06a6.5 6.5 0 0 0-1.701 6.223zm8.387 2.289a5 5 0 0 1-4.79 1.308l-.373 1.453a6.5 6.5 0 0 0 6.224-1.7zm-5.31 2.78a.1.1 0 0 1 .044-.022a.2.2 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412zm-3.489-3.488c.438-.437.547-1.054.412-1.58l-1.453.372q.014.061.003.103a.1.1 0 0 1-.023.045zm1.426 4.485l-1.458-1.442l-1.055 1.067l1.458 1.441z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466S2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2OutlineIcon],svg[solar-key-minimalistic-square-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.757 1.983a.75.75 0 0 1-.733.767c-2.822.064-4.15.349-5.028 1.226c-.57.57-.897 1.342-1.07 2.622c-.174 1.301-.176 3.011-.176 5.392c0 2.38.002 4.09.177 5.392c.172 1.28.499 2.051 1.07 2.622c.57.57 1.341.897 2.621 1.07c1.301.174 3.011.176 5.392.176c2.38 0 4.09-.002 5.392-.177c1.28-.172 2.051-.499 2.622-1.07c.877-.876 1.162-2.206 1.226-5.027a.75.75 0 1 1 1.5.034c-.063 2.766-.313 4.702-1.666 6.054c-.895.896-2.036 1.302-3.482 1.496c-1.413.19-3.224.19-5.535.19h-.114c-2.311 0-4.122 0-5.535-.19c-1.446-.194-2.587-.6-3.482-1.496c-.896-.895-1.302-2.036-1.496-3.482c-.19-1.413-.19-3.224-.19-5.535v-.114c0-2.311 0-4.122.19-5.535c.194-1.446.6-2.587 1.496-3.482C4.289 1.563 6.223 1.313 8.99 1.25a.75.75 0 0 1 .767.733m1.887 1.172a6.506 6.506 0 1 1 2.977 10.901a.2.2 0 0 0-.103-.003a.1.1 0 0 0-.044.022L11.38 17.17a1.98 1.98 0 0 1-1.621.569l-1.741-.194a1.57 1.57 0 0 1-.938-.45l-.174-.174a1.57 1.57 0 0 1-.45-.938l-.194-1.74a1.98 1.98 0 0 1 .569-1.622l3.093-3.093a.1.1 0 0 0 .023-.045a.2.2 0 0 0-.003-.103a6.5 6.5 0 0 1 1.7-6.224m8.14 1.061a5.006 5.006 0 0 0-8.387 4.79c.135.527.026 1.143-.412 1.581l-3.093 3.094a.48.48 0 0 0-.139.395l.193 1.74q.004.026.021.043l.174.174a.07.07 0 0 0 .043.02l1.74.194a.48.48 0 0 0 .395-.139l.5-.5l-.92-.911a.75.75 0 1 1 1.054-1.067l.927.917l1.533-1.532c.438-.438 1.054-.547 1.58-.412a5.006 5.006 0 0 0 4.79-8.387m-5.326 1.909a2.417 2.417 0 1 1 3.417 3.417a2.417 2.417 0 0 1-3.417-3.417m2.357 1.06a.917.917 0 1 0-1.297 1.296a.917.917 0 0 0 1.297-1.296" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3BoldIcon],svg[solar-key-minimalistic-square-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m9.663-.75a3.251 3.251 0 1 0 0 1.5h3.087v.75a.75.75 0 0 0 1.5 0v-.75H17a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1A1.75 1.75 0 0 0 17 11.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3BoldDuotoneIcon],svg[solar-key-minimalistic-square-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.663 11.25a3.251 3.251 0 1 0 0 1.5h3.087v.75a.75.75 0 0 0 1.5 0v-.75H17a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1A1.75 1.75 0 0 0 17 11.25zm-3.163-1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3BrokenIcon],svg[solar-key-minimalistic-square-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M11 12h4.5m0 0H17a1 1 0 0 1 1 1v1m-2.5-2v1.5"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3LineDuotoneIcon],svg[solar-key-minimalistic-square-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path d="M11 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M11 12h4.5m0 0H17a1 1 0 0 1 1 1v1m-2.5-2v1.5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3LinearIcon],svg[solar-key-minimalistic-square-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M11 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M11 12h4.5m0 0H17a1 1 0 0 1 1 1v1m-2.5-2v1.5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3OutlineIcon],svg[solar-key-minimalistic-square-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M8.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M5.25 12a3.25 3.25 0 0 1 6.413-.75H17c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 1-1.5 0v-1a.25.25 0 0 0-.25-.25h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-3.087A3.251 3.251 0 0 1 5.25 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareBoldIcon],svg[solar-key-minimalistic-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.39 9.724a1.333 1.333 0 1 1 1.886 1.885a1.333 1.333 0 0 1-1.886-1.885"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16.651 7.35a4.605 4.605 0 0 1-4.405 7.715a.72.72 0 0 0-.691.172l-1.118 1.118l-.003-.003l-1.166-1.153a.75.75 0 1 0-1.055 1.066l1.163 1.15l-.296.297a.99.99 0 0 1-.807.283l-1.392-.155a.66.66 0 0 1-.393-.188l-.139-.14a.66.66 0 0 1-.188-.392l-.155-1.392a.99.99 0 0 1 .283-.807l2.475-2.474a.72.72 0 0 0 .172-.692a4.604 4.604 0 0 1 7.715-4.405" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareBoldDuotoneIcon],svg[solar-key-minimalistic-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.651 13.86a4.605 4.605 0 1 0-7.715-2.106a.72.72 0 0 1-.172.692L6.289 14.92a.99.99 0 0 0-.283.807l.155 1.392a.66.66 0 0 0 .188.393l.14.139a.66.66 0 0 0 .392.188l1.392.155a.99.99 0 0 0 .807-.283l.296-.297l-1.163-1.15a.75.75 0 0 1 1.055-1.066l1.166 1.153l.003.003l1.118-1.118a.72.72 0 0 1 .69-.172a4.6 4.6 0 0 0 4.406-1.204m-4.26-4.136a1.333 1.333 0 1 1 1.885 1.885a1.333 1.333 0 0 1-1.886-1.885" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareBrokenIcon],svg[solar-key-minimalistic-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.651 7.349l.53-.53zm0 6.511l.53.53zm-7.887-1.414l-.53-.53zM6.289 14.92l.53.53zm2.79 2.791l-.53-.53zm2.476-2.475l-.53-.53zm-5.549.49l-.745.084zm.155 1.393l-.746.083zm.72.72l-.083.746zm1.392.155l.083-.745zm-1.924-.482l.53-.53zm.14.139l-.531.53zm2.447-5.897l-.726.187zm3.31 3.31l-.187.726zm-2.978.134a.75.75 0 1 0-1.055 1.066zm3.653-4.119a.583.583 0 0 1 0-.825l-1.06-1.06a2.083 2.083 0 0 0 0 2.946zm.825 0a.583.583 0 0 1-.825 0l-1.06 1.06a2.083 2.083 0 0 0 2.945 0zm0-.825a.583.583 0 0 1 0 .825l1.06 1.06a2.083 2.083 0 0 0 0-2.945zm1.06-1.06a2.083 2.083 0 0 0-2.946 0l1.06 1.06a.583.583 0 0 1 .826 0zm1.315-1.315a3.854 3.854 0 0 1 0 5.45l1.06 1.062a5.354 5.354 0 0 0 0-7.573zm1.06-1.06a5.354 5.354 0 0 0-7.572 0l1.061 1.06a3.854 3.854 0 0 1 5.451 0zm-8.948 5.096L5.76 14.39l1.06 1.06l2.475-2.474zm1.377 6.326l.827-.827l-1.06-1.06l-.828.827zm.827-.827l1.648-1.648l-1.06-1.06l-1.649 1.648zM5.261 15.81l.154 1.392l1.491-.166l-.155-1.392zm1.537 2.775l1.392.154l.166-1.49l-1.392-.155zm-.979-.543l.139.139l1.06-1.06l-.138-.14zm1.144-.948q.032.003.056.026l-1.061 1.06c.226.227.522.37.84.405zm-1.548.108c.036.318.178.614.404.84l1.06-1.06a.1.1 0 0 1 .027.055zm3.134-.021a.24.24 0 0 1-.193.067L8.19 18.74a1.74 1.74 0 0 0 1.42-.498zM5.76 14.39a1.74 1.74 0 0 0-.498 1.42l1.49-.166a.24.24 0 0 1 .068-.193zm3.904-2.822a3.85 3.85 0 0 1 1.007-3.69l-1.06-1.06a5.35 5.35 0 0 0-1.4 5.123zm6.458 1.762a3.85 3.85 0 0 1-3.688 1.007l-.374 1.453a5.35 5.35 0 0 0 5.123-1.4zm-4.036 2.436a.1.1 0 0 1-.036.023l.01.001l.373-1.453a1.47 1.47 0 0 0-1.408.369zm-2.791-2.79a1.47 1.47 0 0 0 .369-1.408l-1.453.373l.001.01l.006-.014l.016-.022zm1.14 3.375l-1.166-1.153l-1.055 1.066l1.166 1.153z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareLineDuotoneIcon],svg[solar-key-minimalistic-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.651 7.349l.53-.53zm0 6.511l.53.53zm-7.887-1.414l-.53-.53zM6.289 14.92l.53.53zm2.79 2.791l-.53-.53zm2.476-2.475l-.53-.53zm-5.549.49l-.745.084zm.155 1.393l-.746.083zm.72.72l-.083.746zm1.392.155l.083-.745zm-1.924-.482l.53-.53zm.14.139l-.531.53zm2.447-5.897l-.726.187zm3.31 3.31l-.187.726zm-2.978.134a.75.75 0 1 0-1.055 1.066zm3.653-4.119a.583.583 0 0 1 0-.825l-1.06-1.06a2.083 2.083 0 0 0 0 2.946zm.825 0a.583.583 0 0 1-.825 0l-1.06 1.06a2.083 2.083 0 0 0 2.945 0zm0-.825a.583.583 0 0 1 0 .825l1.06 1.06a2.083 2.083 0 0 0 0-2.945zm1.06-1.06a2.083 2.083 0 0 0-2.946 0l1.06 1.06a.583.583 0 0 1 .826 0zm1.315-1.315a3.854 3.854 0 0 1 0 5.45l1.06 1.062a5.354 5.354 0 0 0 0-7.573zm1.06-1.06a5.354 5.354 0 0 0-7.572 0l1.061 1.06a3.854 3.854 0 0 1 5.451 0zm-8.948 5.096L5.76 14.39l1.06 1.06l2.475-2.474zm1.377 6.326l.827-.827l-1.06-1.06l-.828.827zm.827-.827l1.648-1.648l-1.06-1.06l-1.649 1.648zM5.261 15.81l.154 1.392l1.491-.166l-.155-1.392zm1.537 2.775l1.392.154l.166-1.49l-1.392-.155zm-.979-.543l.139.139l1.06-1.06l-.138-.14zm1.144-.948q.032.003.056.026l-1.061 1.06c.226.227.522.37.84.405zm-1.548.108c.036.318.178.614.404.84l1.06-1.06a.1.1 0 0 1 .027.055zm3.134-.021a.24.24 0 0 1-.193.067L8.19 18.74a1.74 1.74 0 0 0 1.42-.498zM5.76 14.39a1.74 1.74 0 0 0-.498 1.42l1.49-.166a.24.24 0 0 1 .068-.193zm3.904-2.822a3.85 3.85 0 0 1 1.007-3.69l-1.06-1.06a5.35 5.35 0 0 0-1.4 5.123zm6.458 1.762a3.85 3.85 0 0 1-3.688 1.007l-.374 1.453a5.35 5.35 0 0 0 5.123-1.4zm-4.036 2.436a.1.1 0 0 1-.036.023l.01.001l.373-1.453a1.47 1.47 0 0 0-1.408.369zm-2.791-2.79a1.47 1.47 0 0 0 .369-1.408l-1.453.373l.001.01l.006-.014l.016-.022zm1.14 3.375l-1.166-1.153l-1.055 1.066l1.166 1.153z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareLinearIcon],svg[solar-key-minimalistic-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.651 7.349l.53-.53zm0 6.511l.53.53zm-7.887-1.414l-.53-.53zM6.289 14.92l.53.53zm2.79 2.791l-.53-.53zm2.476-2.475l-.53-.53zm-5.549.49l-.745.084zm.155 1.393l-.746.083zm.72.72l-.083.746zm1.392.155l.083-.745zm-1.924-.482l.53-.53zm.14.139l-.531.53zm2.447-5.897l-.726.187zm3.31 3.31l-.187.726zm-2.978.134a.75.75 0 1 0-1.055 1.066zm3.653-4.119a.583.583 0 0 1 0-.825l-1.06-1.06a2.083 2.083 0 0 0 0 2.946zm.825 0a.583.583 0 0 1-.825 0l-1.06 1.06a2.083 2.083 0 0 0 2.945 0zm0-.825a.583.583 0 0 1 0 .825l1.06 1.06a2.083 2.083 0 0 0 0-2.945zm1.06-1.06a2.083 2.083 0 0 0-2.946 0l1.06 1.06a.583.583 0 0 1 .826 0zm1.315-1.315a3.854 3.854 0 0 1 0 5.45l1.06 1.062a5.354 5.354 0 0 0 0-7.573zm1.06-1.06a5.354 5.354 0 0 0-7.572 0l1.061 1.06a3.854 3.854 0 0 1 5.451 0zm-8.948 5.096L5.76 14.39l1.06 1.06l2.475-2.474zm1.377 6.326l.827-.827l-1.06-1.06l-.828.827zm.827-.827l1.648-1.648l-1.06-1.06l-1.649 1.648zM5.261 15.81l.154 1.392l1.491-.166l-.155-1.392zm1.537 2.775l1.392.154l.166-1.49l-1.392-.155zm-.979-.543l.139.139l1.06-1.06l-.138-.14zm1.144-.948q.032.003.056.026l-1.061 1.06c.226.227.522.37.84.405zm-1.548.108c.036.318.178.614.404.84l1.06-1.06a.1.1 0 0 1 .027.055zm3.134-.021a.24.24 0 0 1-.193.067L8.19 18.74a1.74 1.74 0 0 0 1.42-.498zM5.76 14.39a1.74 1.74 0 0 0-.498 1.42l1.49-.166a.24.24 0 0 1 .068-.193zm3.904-2.822a3.85 3.85 0 0 1 1.007-3.69l-1.06-1.06a5.35 5.35 0 0 0-1.4 5.123zm6.458 1.762a3.85 3.85 0 0 1-3.688 1.007l-.374 1.453a5.35 5.35 0 0 0 5.123-1.4zm-4.036 2.436a.1.1 0 0 1-.036.023l.01.001l.373-1.453a1.47 1.47 0 0 0-1.408.369zm-2.791-2.79a1.47 1.47 0 0 0 .369-1.408l-1.453.373l.001.01l.006-.014l.016-.022zm1.14 3.375l-1.166-1.153l-1.055 1.066l1.166 1.153z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareOutlineIcon],svg[solar-key-minimalistic-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M9.61 6.818a5.354 5.354 0 1 1 2.452 8.973L9.61 18.24a1.74 1.74 0 0 1-1.42.498l-1.392-.154a1.4 1.4 0 0 1-.84-.404l-.139-.139a1.4 1.4 0 0 1-.404-.84l-.154-1.392a1.74 1.74 0 0 1 .498-1.42l2.45-2.45a5.35 5.35 0 0 1 1.4-5.122m6.512 1.06a3.854 3.854 0 0 0-6.458 3.69a1.47 1.47 0 0 1-.369 1.408L6.82 15.45a.24.24 0 0 0-.068.193l.152 1.36l.093.093l1.36.151a.24.24 0 0 0 .193-.067l.294-.294l-.63-.623a.75.75 0 1 1 1.055-1.066l.636.628l1.12-1.12a1.47 1.47 0 0 1 1.409-.369a3.854 3.854 0 0 0 3.689-6.458m-4.26 1.316a2.083 2.083 0 1 1 2.945 2.946a2.083 2.083 0 0 1-2.946-2.946m1.885 1.06a.583.583 0 1 0-.825.825a.583.583 0 0 0 .825-.825" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyOutlineIcon],svg[solar-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.68 5.348a2.95 2.95 0 0 0-2.953 2.946a2.95 2.95 0 0 0 2.954 2.945a2.95 2.95 0 0 0 2.954-2.945a2.95 2.95 0 0 0-2.954-2.946m-1.453 2.946a1.45 1.45 0 0 1 1.454-1.446c.806 0 1.454.65 1.454 1.446a1.45 1.45 0 0 1-1.454 1.445a1.45 1.45 0 0 1-1.454-1.445"></svg:path><svg:path d="M9.53 20.878a2.2 2.2 0 0 0 .432-1.355c.392.116.78.13 1.152.06c.768-.146 1.337-.632 1.639-1.032l.005-.007l.005-.007a2.42 2.42 0 0 0 .396-2.02a2.9 2.9 0 0 0-.36-.85a2.2 2.2 0 0 0-.272-.393l.009-.01l.464-.462c.382.183.796.298 1.158.373a8 8 0 0 0 1.523.162c3.901 0 7.069-3.15 7.069-7.044c0-3.892-3.168-7.043-7.07-7.043c-3.9 0-7.069 3.15-7.069 7.043a6.5 6.5 0 0 0 .57 2.635l-7.256 7.226a2.37 2.37 0 0 0-.648 1.255c-.099.603.063 1.274.648 1.856l.882.878l.042.04a2.46 2.46 0 0 0 1.197.544a1.98 1.98 0 0 0 1.73-.584l.566-.564a2.33 2.33 0 0 0 1.617.276a2.62 2.62 0 0 0 1.56-.963l.006-.007zm.581-12.585c0-3.058 2.491-5.543 5.57-5.543c3.078 0 5.569 2.485 5.569 5.543c0 3.06-2.49 5.544-5.57 5.544c-.272 0-.743-.033-1.218-.13c-.497-.104-.887-.257-1.095-.43a.75.75 0 0 0-1.008.047l-.882.878c-.201.2-.395.428-.498.691c-.13.333-.088.653.06.92c.088.157.23.307.289.37l.02.021c.07.077.107.127.135.183l.027.053l.03.042l.007.01q.014.023.042.076c.038.073.082.176.11.297a.92.92 0 0 1-.15.79c-.14.183-.407.396-.714.454c-.258.049-.678.017-1.238-.54a.75.75 0 0 0-1.059 0l-.294.292a.75.75 0 0 0-.032 1.03q.018.024.055.08c.048.075.104.18.144.3c.076.225.088.466-.095.726c-.12.155-.363.332-.639.384c-.234.045-.534.012-.872-.325a.75.75 0 0 0-1.059 0l-1.029 1.025c-.165.164-.31.183-.452.162a1 1 0 0 1-.424-.187l-.857-.854c-.239-.237-.248-.42-.227-.55a.87.87 0 0 1 .227-.436l7.644-7.613a.746.746 0 0 0 .105-.925l-.002-.003a2 2 0 0 1-.082-.15a5 5 0 0 1-.538-2.232m-1.91 10.583q0 .002.004.005l-.001-.001z"></svg:path></svg:g>`,
})
export class SolarKeyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2BoldIcon],svg[solar-key-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72c-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689c.071.078.155.17.22.299c0 0 .551.768 0 1.537c-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72S22 4.113 22 6.72m-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.196 2.001a6.2 6.2 0 0 0-2.175 4.72c0 .68.127 1.276.273 1.738l-5.012 4.992a2.7 2.7 0 0 0-.75 1.455c-.122.747.095 1.555.75 2.207l.662.659q.04.04.084.078a2.8 2.8 0 0 0 1.37.623a2.42 2.42 0 0 0 2.088-.693c.385.097.78.105 1.16.032a2.9 2.9 0 0 0 1.763-1.107q.199-.278.31-.557a3 3 0 0 0 .291-.04a3 3 0 0 0 1.824-1.16a2.74 2.74 0 0 0 .487-2.08a6.24 6.24 0 0 0 5.678-2.1L22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2z"></svg:path>`,
})
export class SolarKeySquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2BoldDuotoneIcon],svg[solar-key-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72c-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689c.071.078.155.17.22.299c0 0 .551.768 0 1.537c-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72S22 4.113 22 6.72m-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2BrokenIcon],svg[solar-key-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17.26 11.44c2.618 0 4.74-2.113 4.74-4.72S19.878 2 17.26 2c-2.617 0-4.739 2.113-4.739 4.72c0 1.208.551 2.086.551 2.086l-5.731 5.708c-.257.256-.617.922 0 1.537l.661.658c.257.22.904.527 1.433 0l.771-.768c.772.768 1.654.329 1.984-.11c.552-.768-.11-1.537-.11-1.537l.22-.22c1.059 1.054 1.985.44 2.315 0c.551-.768 0-1.536 0-1.536c-.22-.44-.661-.44-.11-.988l.661-.659c.53.44 1.617.55 2.095.55Z"></svg:path><svg:path stroke-linecap="round" d="M2 11.99c0 4.719 0 7.078 1.466 8.544S7.29 22 12.01 22s7.078 0 8.544-1.466c1.115-1.115 1.382-2.747 1.446-5.541M9.007 2c-2.794.064-4.426.33-5.541 1.446c-.977.977-1.303 2.35-1.412 4.554"></svg:path></svg:g>`,
})
export class SolarKeySquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2LineDuotoneIcon],svg[solar-key-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17.26 11.44c2.618 0 4.74-2.113 4.74-4.72S19.878 2 17.26 2c-2.617 0-4.739 2.113-4.739 4.72c0 1.208.551 2.086.551 2.086l-5.731 5.708c-.257.256-.617.922 0 1.537l.661.658c.257.22.904.527 1.433 0l.771-.768c.772.768 1.654.329 1.984-.11c.552-.768-.11-1.537-.11-1.537l.22-.22c1.059 1.054 1.985.44 2.315 0c.551-.768 0-1.536 0-1.536c-.22-.44-.661-.44-.11-.988l.661-.659c.53.44 1.617.55 2.095.55Z"></svg:path><svg:path d="M17.26 8.366a1.65 1.65 0 0 0 1.654-1.646c0-.91-.74-1.647-1.654-1.647a1.65 1.65 0 0 0-1.653 1.647c0 .91.74 1.646 1.654 1.646Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466S2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeySquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2LinearIcon],svg[solar-key-square-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17.26 11.44c2.618 0 4.74-2.113 4.74-4.72S19.878 2 17.26 2c-2.617 0-4.739 2.113-4.739 4.72c0 1.208.551 2.086.551 2.086l-5.731 5.708c-.257.256-.617.922 0 1.537l.661.658c.257.22.904.527 1.433 0l.771-.768c.772.768 1.654.329 1.984-.11c.552-.768-.11-1.537-.11-1.537l.22-.22c1.059 1.054 1.985.44 2.315 0c.551-.768 0-1.536 0-1.536c-.22-.44-.661-.44-.11-.988l.661-.659c.53.44 1.617.55 2.095.55Z"></svg:path><svg:path stroke-linecap="round" d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466S2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2"></svg:path></svg:g>`,
})
export class SolarKeySquare2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2OutlineIcon],svg[solar-key-square-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.757 1.983a.75.75 0 0 1-.733.767c-2.822.064-4.15.349-5.028 1.226c-.57.57-.897 1.342-1.07 2.622c-.174 1.301-.176 3.011-.176 5.392c0 2.38.002 4.09.177 5.392c.172 1.28.499 2.051 1.07 2.622c.57.57 1.341.897 2.621 1.07c1.301.174 3.011.176 5.392.176c2.38 0 4.09-.002 5.392-.177c1.28-.172 2.051-.499 2.622-1.07c.877-.876 1.162-2.206 1.226-5.027a.75.75 0 1 1 1.5.034c-.063 2.766-.313 4.702-1.666 6.054c-.895.896-2.036 1.302-3.482 1.496c-1.413.19-3.224.19-5.535.19h-.114c-2.311 0-4.122 0-5.535-.19c-1.446-.194-2.587-.6-3.482-1.496c-.896-.895-1.302-2.036-1.496-3.482c-.19-1.413-.19-3.224-.19-5.535v-.114c0-2.311 0-4.122.19-5.535c.194-1.446.6-2.587 1.496-3.482C4.289 1.563 6.223 1.313 8.99 1.25a.75.75 0 0 1 .767.733m7.504.767c-2.207 0-3.99 1.78-3.99 3.97a3.6 3.6 0 0 0 .429 1.673l.01.017a.746.746 0 0 1-.106.925l-5.734 5.71a.46.46 0 0 0-.117.224a.2.2 0 0 0 .005.089a.4.4 0 0 0 .112.161l.634.632a.55.55 0 0 0 .222.096a.2.2 0 0 0 .082-.003a.24.24 0 0 0 .098-.066l.771-.769a.75.75 0 0 1 1.059 0c.115.115.21.162.279.183a.4.4 0 0 0 .208.01a.66.66 0 0 0 .363-.216c.091-.13.088-.244.045-.374a1 1 0 0 0-.122-.231l-.004-.005a.75.75 0 0 1 .046-1.013l.22-.22a.75.75 0 0 1 1.059 0c.384.383.638.378.761.355a.76.76 0 0 0 .42-.268a.5.5 0 0 0 .082-.437a.8.8 0 0 0-.092-.225L14 12.967l-.029-.04l-.026-.053a.4.4 0 0 0-.073-.095l-.009-.01a1.7 1.7 0 0 1-.247-.319a.98.98 0 0 1-.056-.848c.091-.235.26-.428.416-.584l.661-.658a.75.75 0 0 1 1.008-.046c.12.1.375.207.74.282c.342.07.682.094.876.094c2.206 0 3.989-1.78 3.989-3.97s-1.783-3.97-3.99-3.97m-4.112 12.626c-.032.286-.133.59-.35.892l-.004.007l-.005.007a2.15 2.15 0 0 1-1.285.793a1.93 1.93 0 0 1-1.214-.16l-.327.326c-.452.45-.992.559-1.457.49a2.03 2.03 0 0 1-1.034-.49l-.661-.66c-.482-.48-.623-1.043-.54-1.554c.077-.465.326-.832.54-1.045l5.35-5.33l-.068-.175a5.1 5.1 0 0 1-.323-1.757c0-3.024 2.46-5.47 5.49-5.47c3.028 0 5.489 2.446 5.489 5.47s-2.46 5.47-5.49 5.47a6 6 0 0 1-1.18-.125a4.2 4.2 0 0 1-.79-.24l-.144.146a2 2 0 0 1 .129.205q.036.058.085.152c.064.123.14.3.191.516a2 2 0 0 1-.326 1.668l-.005.007l-.006.007a2.25 2.25 0 0 1-1.344.845a2 2 0 0 1-.721.005m4.112-9.552a.9.9 0 0 0-.904.896a.9.9 0 0 0 .904.897a.9.9 0 0 0 .903-.897a.9.9 0 0 0-.903-.896m-2.404.896a2.4 2.4 0 0 1 2.404-2.396a2.4 2.4 0 0 1 2.403 2.396a2.4 2.4 0 0 1-2.403 2.397a2.4 2.4 0 0 1-2.404-2.397" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquare2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareBoldIcon],svg[solar-key-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.208 11.093c.73 0 1.323-.59 1.323-1.317a1.32 1.32 0 0 0-1.323-1.317c-.73 0-1.322.59-1.322 1.317a1.32 1.32 0 0 0 1.322 1.317"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.744 10.088A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23a1 1 0 0 0-.177-.239c-.138-.15-.222-.241.089-.551l.53-.527c.422.351 1.292.44 1.674.44" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareBoldDuotoneIcon],svg[solar-key-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 9.776a3.784 3.784 0 0 1-3.792 3.776c-.382 0-1.252-.088-1.675-.439l-.529.527c-.311.31-.227.401-.089.551c.058.063.125.136.177.24c0 0 .441.614 0 1.229c-.264.351-1.005.843-1.851 0l-.177.175s.53.615.088 1.23c-.264.351-.97.702-1.587.088l-.617.614c-.423.422-.94.176-1.146 0l-.53-.527c-.493-.491-.205-1.024 0-1.229l4.586-4.566s-.441-.703-.441-1.669A3.784 3.784 0 0 1 14.208 6A3.784 3.784 0 0 1 18 9.776m-3.792 1.317c.73 0 1.323-.59 1.323-1.317a1.32 1.32 0 0 0-1.323-1.317c-.73 0-1.322.59-1.322 1.317a1.32 1.32 0 0 0 1.322 1.317" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareBrokenIcon],svg[solar-key-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.208 13.552A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23c-.176-.351-.529-.351-.088-.79l.53-.527c.422.351 1.292.44 1.674.44Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarKeySquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareLineDuotoneIcon],svg[solar-key-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.208 13.552A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23c-.176-.351-.529-.351-.088-.79l.53-.527c.422.351 1.292.44 1.674.44Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeySquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareLinearIcon],svg[solar-key-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.208 13.552A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23c-.176-.351-.529-.351-.088-.79l.53-.527c.422.351 1.292.44 1.674.44Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarKeySquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareOutlineIcon],svg[solar-key-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m7.595 3.824a3.034 3.034 0 0 0-3.041 3.026a2.7 2.7 0 0 0 .323 1.264l.006.01a.744.744 0 0 1-.106.923l-4.588 4.57l-.01.012l-.02.03a.2.2 0 0 0-.022.054v.003l.001.002l.006.012a.3.3 0 0 0 .045.053l.498.497l.004.002a.3.3 0 0 0 .099.041l.016-.013l.617-.615a.75.75 0 0 1 1.058 0c.077.076.133.1.162.11q.044.013.094.003a.4.4 0 0 0 .124-.052a.4.4 0 0 0 .075-.063c.035-.053.037-.091.013-.161a.5.5 0 0 0-.074-.143m1.556.554c-.043.206-.13.42-.282.633l-.005.007l-.005.007a1.87 1.87 0 0 1-1.12.692c-.314.06-.646.034-.966-.097l-.189.188c-.4.398-.88.495-1.293.434a1.8 1.8 0 0 1-.912-.434l-.529-.527c-.42-.419-.547-.918-.473-1.375c.067-.41.286-.73.473-.917l4.211-4.194l-.02-.052a4.2 4.2 0 0 1-.267-1.458c0-2.503 2.036-4.526 4.541-4.526s4.542 2.023 4.542 4.526s-2.036 4.526-4.542 4.526a5 5 0 0 1-.974-.103a4 4 0 0 1-.484-.132q.03.05.072.127c.054.107.12.26.165.446c.092.384.093.93-.285 1.457l-.005.007l-.006.007a1.95 1.95 0 0 1-1.167.733a1.8 1.8 0 0 1-.48.025m-1.556-.554a.75.75 0 0 1 .047-1.011l.176-.176a.75.75 0 0 1 1.059 0a.9.9 0 0 0 .326.228a.3.3 0 0 0 .149.015a.46.46 0 0 0 .243-.156a.26.26 0 0 0 .04-.226a.5.5 0 0 0-.053-.133l-.027-.037l-.026-.052l-.036-.043l-.002-.002c-.017-.018-.145-.15-.222-.289a.93.93 0 0 1-.054-.806c.085-.218.239-.39.367-.519l.529-.526a.75.75 0 0 1 1.008-.046c.067.055.241.135.526.194c.263.054.525.072.67.072a3.034 3.034 0 0 0 3.042-3.026a3.034 3.034 0 0 0-3.042-3.026m0 2.459a.57.57 0 0 0-.572.567c0 .31.253.567.572.567a.57.57 0 0 0 .573-.567a.57.57 0 0 0-.573-.567m-2.072.567a2.07 2.07 0 0 1 2.072-2.067a2.07 2.07 0 0 1 2.073 2.067a2.07 2.07 0 0 1-2.073 2.067a2.07 2.07 0 0 1-2.072-2.067" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardBoldIcon],svg[solar-keyboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5m-2 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.25 3a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardBoldDuotoneIcon],svg[solar-keyboard-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h8c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.25 3a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarKeyboardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardBrokenIcon],svg[solar-keyboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 5c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h4M7 16h10"></svg:path></svg:g>`,
})
export class SolarKeyboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardLineDuotoneIcon],svg[solar-keyboard-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 16h10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyboardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardLinearIcon],svg[solar-keyboard-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 16h10"></svg:path></svg:g>`,
})
export class SolarKeyboardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardOutlineIcon],svg[solar-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.945 4.25h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-2.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.808 5.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v2c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.754.103-1.756.103-3.191v-2c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103M6.25 16a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterBoldIcon],svg[solar-kick-scooter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.631 4.769a15 15 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023c.32.024.622.075.918.206c.456.202.846.529 1.124.942c.181.269.283.558.36.867c.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.13 3.13 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103c0-1.722 1.41-3.103 3.131-3.103c1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991c-.055-.222-.103-.324-.148-.391a1.15 1.15 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082m-.143 12.878c0-1.722 1.41-3.103 3.131-3.103s3.131 1.381 3.131 3.103s-1.41 3.103-3.131 3.103s-3.13-1.38-3.13-3.103" clip-rule="evenodd"></svg:path>`,
})
export class SolarKickScooterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterBoldDuotoneIcon],svg[solar-kick-scooter-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.631 4.769a15 15 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023c.32.024.622.075.918.206c.456.202.846.529 1.124.942c.181.269.283.558.36.867c.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.13 3.13 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103c0-1.722 1.41-3.103 3.131-3.103c1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991c-.055-.222-.103-.324-.148-.391a1.15 1.15 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.488 17.647c0-1.722 1.41-3.103 3.131-3.103s3.131 1.38 3.131 3.103c0 1.722-1.41 3.103-3.13 3.103c-1.722 0-3.132-1.381-3.132-3.103" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarKickScooterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterBrokenIcon],svg[solar-kick-scooter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75zm5.238-5.176v.75a.75.75 0 0 0 .74-.875zm-1.744-5.83a.75.75 0 1 0 1.48-.25zM14.381 3.25a.75.75 0 1 0 0 1.5zm3.782 1.59l-.622.419zm-.806-.675l.303-.686zm2.67 6.21a.75.75 0 0 0-1.48.25zM10 18.397a.75.75 0 0 0 0-1.5zm3-1.5a.75.75 0 1 0 0 1.5zm8.25.75c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.131-1.38 3.131-3.103zm-1.631 1.603c-.91 0-1.63-.726-1.63-1.603h-1.5c0 1.722 1.41 3.103 3.13 3.103zm-1.63-1.603c0-.877.72-1.603 1.63-1.603v-1.5c-1.72 0-3.13 1.381-3.13 3.103zm1.63-1.603c.91 0 1.631.726 1.631 1.603h1.5c0-1.722-1.41-3.103-3.131-3.103zm-4.488 1.603c0-2.436 2-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926zm.478-14.397H14.38v1.5h1.228zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.7 2.7 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39c.058.232.11.534.186.992zM15.609 4.75c.47 0 .78 0 1.022.019c.232.017.345.048.422.082l.607-1.372a2.7 2.7 0 0 0-.917-.206c-.31-.023-.687-.023-1.134-.023zm3.176-.329a2.65 2.65 0 0 0-1.125-.942l-.607 1.372c.2.088.368.23.488.408zM6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.38 3.13-3.103zM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.63-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.381-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103zm15.978-3.698l-.333-1.97l-1.479.249l.332 1.97zM10 16.897H6.762v1.5H10zm4.381 0H13v1.5h1.381z"></svg:path>`,
})
export class SolarKickScooterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterLineDuotoneIcon],svg[solar-kick-scooter-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75zm5.238-5.176v.75a.75.75 0 0 0 .74-.875zm-1.004-5.954l-.74.124zM14.381 3.25a.75.75 0 0 0 0 1.5zm3.782 1.59l-.622.419zm-.806-.675l.304-.686zM15.13 17.647c0-2.436 2.001-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926zm-.75-.75H6.762v1.5h7.619zm5.978-4.551l-1.005-5.954l-1.479.25l1.005 5.953zm-4.75-9.096H14.38v1.5h1.228zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.7 2.7 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39c.058.232.11.534.186.992zM15.609 4.75c.47 0 .78 0 1.022.019c.232.017.345.048.422.082l.608-1.372a2.7 2.7 0 0 0-.918-.206c-.31-.023-.687-.023-1.134-.023zm3.176-.329a2.65 2.65 0 0 0-1.124-.942l-.608 1.372c.2.088.368.23.488.408z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.381 3.13-3.103zM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.63-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.38-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103zm16.869 1.603c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.381 3.13-3.103zm-1.631 1.603c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.631-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.38-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103z"></svg:path>`,
})
export class SolarKickScooterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterLinearIcon],svg[solar-kick-scooter-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75zm5.238-5.176v.75a.75.75 0 0 0 .74-.875zm-1.004-5.954l-.74.124zM14.38 3.25a.75.75 0 1 0 0 1.5zm3.782 1.59l-.622.419zm-.806-.675l.303-.686zm3.893 13.482c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.131-1.38 3.131-3.103zm-1.631 1.603c-.91 0-1.63-.726-1.63-1.603h-1.5c0 1.722 1.41 3.103 3.13 3.103zm-1.63-1.603c0-.877.72-1.603 1.63-1.603v-1.5c-1.72 0-3.13 1.381-3.13 3.103zm1.63-1.603c.91 0 1.631.726 1.631 1.603h1.5c0-1.722-1.41-3.103-3.131-3.103zm-4.488 1.603c0-2.436 2-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926zm-.75-.75H6.76v1.5h7.62zm5.978-4.551l-1.005-5.954l-1.479.25l1.005 5.953zm-4.75-9.096H14.38v1.5h1.228zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.7 2.7 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39c.058.232.11.534.186.992zM15.609 4.75c.47 0 .78 0 1.022.019c.232.017.345.048.422.082l.607-1.372a2.7 2.7 0 0 0-.917-.206c-.31-.023-.687-.023-1.134-.023zm3.176-.329a2.65 2.65 0 0 0-1.125-.942l-.607 1.372c.2.088.368.23.488.408zM6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.38 3.13-3.103zM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.63-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.381-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103z"></svg:path>`,
})
export class SolarKickScooterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterOutlineIcon],svg[solar-kick-scooter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.631 4.769a15 15 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023c.32.024.622.075.918.206c.456.202.846.529 1.124.942c.181.269.283.558.36.867c.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.13 3.13 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103c0-1.722 1.41-3.103 3.131-3.103c1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991c-.055-.222-.103-.324-.148-.391a1.15 1.15 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082M4.381 16.044c-.91 0-1.631.726-1.631 1.603s.722 1.603 1.631 1.603c.91 0 1.63-.726 1.63-1.603s-.72-1.603-1.63-1.603m15.238 0c-.91 0-1.63.726-1.63 1.603s.72 1.603 1.63 1.603s1.631-.726 1.631-1.603s-.722-1.603-1.631-1.603m-3.13 1.603c0-1.722 1.41-3.103 3.13-3.103s3.131 1.381 3.131 3.103s-1.41 3.103-3.131 3.103s-3.13-1.38-3.13-3.103" clip-rule="evenodd"></svg:path>`,
})
export class SolarKickScooterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleBoldIcon],svg[solar-ladle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.684 2.75A2.934 2.934 0 0 0 2.75 5.684a.75.75 0 0 1-1.5 0a4.434 4.434 0 1 1 8.868 0v6.057a5.7 5.7 0 0 0-.974.618a3.7 3.7 0 0 0-.526.515v-7.19A2.934 2.934 0 0 0 5.684 2.75m2.949 13.393a7.066 7.066 0 0 0 14.084.225a4 4 0 0 1-.207.207c-.503.464-1.145.817-1.802 1.083c-1.324.536-3.02.842-4.708.842c-1.685 0-3.486-.305-4.908-.823c-.706-.256-1.4-.595-1.948-1.036a3.7 3.7 0 0 1-.51-.498"></svg:path><svg:path fill="currentColor" d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5"></svg:path>`,
})
export class SolarLadleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleBoldDuotoneIcon],svg[solar-ladle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17c3.054 0 6-1.12 6-2.5S19.054 12 16 12s-6.632 1.12-6.632 2.5S12.946 17 16 17" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.434 2.5A2.934 2.934 0 0 0 3.5 5.434a.75.75 0 0 1-1.5 0a4.434 4.434 0 1 1 8.868 0v7.568c-.897.413-1.486.924-1.5 1.478V5.434A2.934 2.934 0 0 0 6.434 2.5m2.934 12.02c.009.323.212.632.558.914C11.05 16.352 13.676 17 16 17c3.054 0 6-1.12 6-2.5v1.184a6.316 6.316 0 1 1-12.632 0V14.5z"></svg:path>`,
})
export class SolarLadleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleBrokenIcon],svg[solar-ladle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 5.684a3.684 3.684 0 0 1 7.368 0M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0V9.158"></svg:path><svg:path d="M16 12c-3.054 0-6.5 1.12-6.5 2.5S12.946 17 16 17s6-1.12 6-2.5c0-.72-.8-1.369-2-1.825"></svg:path></svg:g>`,
})
export class SolarLadleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleLineDuotoneIcon],svg[solar-ladle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 5.684a3.684 3.684 0 0 1 7.368 0V15" opacity=".5"></svg:path><svg:path d="M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0v-1.052M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.632-.988-6.632-2.368M22 14.5c0-1.38-2.946-2.5-6-2.5s-6.632 1.25-6.632 2.632"></svg:path></svg:g>`,
})
export class SolarLadleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleLinearIcon],svg[solar-ladle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 5.684a3.684 3.684 0 0 1 7.368 0v10a6.316 6.316 0 0 0 12.632 0V14.5"></svg:path><svg:path d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5Z"></svg:path></svg:g>`,
})
export class SolarLadleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleOutlineIcon],svg[solar-ladle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.434 2.5A2.934 2.934 0 0 0 2.5 5.434a.75.75 0 0 1-1.5 0a4.434 4.434 0 1 1 8.868 0v6.912a7.3 7.3 0 0 1 1.23-.569c1.333-.485 3.046-.777 4.652-.777c1.608 0 3.205.293 4.427.787c.608.246 1.16.557 1.574.939c.411.38.749.894.749 1.524v1.184a7.066 7.066 0 0 1-14.132 0v-10A2.934 2.934 0 0 0 5.434 2.5m15.49 13.86a5.567 5.567 0 0 1-11.006-.177c.355.206.757.386 1.18.54c1.333.485 3.046.777 4.652.777c1.608 0 3.205-.293 4.427-.787q.393-.159.747-.354M21 14.25c0-.06-.03-.204-.267-.422c-.234-.217-.61-.444-1.12-.65c-1.014-.411-2.417-.678-3.863-.678c-1.448 0-2.985.267-4.139.687c-.58.211-1.022.446-1.304.674c-.296.238-.307.375-.307.389s.011.151.307.39c.282.227.724.462 1.304.673c1.154.42 2.691.687 4.139.687c1.446 0 2.849-.267 3.864-.678c.51-.206.885-.433 1.12-.65S21 14.31 21 14.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarLadleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampBoldIcon],svg[solar-lamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"></svg:path>`,
})
export class SolarLampBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampBoldDuotoneIcon],svg[solar-lamp-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.968 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.372 2 9.584 2 12.007 2s3.634 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.699 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a3 3 0 0 1-.247.319c-.285.322-.648.541-1.116.69c-.596.146-1.246.23-1.497.254c-.849.065-1.904.065-3.223.065h-3.059c-3.294 0-4.941 0-5.836-1.01q-.135-.15-.247-.318c-.752-1.12-.338-2.714.49-5.903z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.759 14.935l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c-.596.145-1.246.23-1.497.253" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.256 21.25V15h1.5v6.25z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.256 21.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarLampBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampBrokenIcon],svg[solar-lamp-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 22h6m-3 0v-7m0-13c2.423 0 3.635 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.241 4.783.49 5.903a3 3 0 0 1-.247.319C18.47 15 16.824 15 13.529 15h-3.058c-3.295 0-4.942 0-5.837-1.01q-.135-.15-.247-.318c-.751-1.12-.337-2.714.49-5.903l.085-.324c.608-2.346.913-3.519 1.699-4.294a4 4 0 0 1 .757-.585q.271-.163.582-.268M17.5 15v2"></svg:path>`,
})
export class SolarLampBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampLineDuotoneIcon],svg[solar-lamp-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6"></svg:path><svg:path stroke-linecap="round" d="M12 22v-7" opacity=".5"></svg:path><svg:path d="M4.961 7.445c.61-2.346.914-3.519 1.7-4.294a4 4 0 0 1 .757-.585C8.365 2 9.577 2 12 2s3.635 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.827 3.189 1.241 4.783.49 5.903a3 3 0 0 1-.247.319C18.47 15 16.823 15 13.529 15h-3.058c-3.295 0-4.942 0-5.837-1.01q-.135-.15-.247-.318c-.752-1.12-.338-2.714.49-5.903z"></svg:path><svg:path stroke-linecap="round" d="M17.5 15v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLampLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampLinearIcon],svg[solar-lamp-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0v-7"></svg:path><svg:path d="M4.962 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.365 2 9.577 2 12 2s3.635 0 4.583.566a4 4 0 0 1 .756.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a3 3 0 0 1-.247.319C18.471 15 16.824 15 13.53 15h-3.058c-3.294 0-4.942 0-5.837-1.01q-.134-.15-.246-.318c-.752-1.12-.338-2.714.49-5.903z"></svg:path><svg:path stroke-linecap="round" d="M17.5 15v2"></svg:path></svg:g>`,
})
export class SolarLampLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampOutlineIcon],svg[solar-lamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.961 1.25h.078c1.179 0 2.118 0 2.879.074c.783.077 1.444.237 2.05.598q.49.294.898.695c.501.495.822 1.095 1.093 1.834c.264.718.5 1.627.796 2.767l.108.418c.402 1.547.723 2.783.842 3.77c.122 1.015.051 1.908-.47 2.684a4 4 0 0 1-.308.399c-.448.505-1.015.798-1.677.973V17a.75.75 0 0 1-1.5 0v-1.313c-.869.063-1.919.063-3.163.063h-.837v5.5H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-5.5h-.836c-1.599 0-2.876 0-3.861-.133c-1.013-.137-1.86-.43-2.48-1.128a4 4 0 0 1-.308-.4c-.521-.775-.592-1.668-.47-2.683c.12-.987.44-2.223.842-3.77l.108-.417c.297-1.141.533-2.05.796-2.768c.27-.74.592-1.34 1.094-1.834q.407-.4.898-.695c.605-.36 1.266-.521 2.05-.598c.76-.074 1.7-.074 2.878-.074m1.568 13c1.67 0 2.845-.002 3.718-.12c.858-.115 1.283-.327 1.558-.637q.1-.113.185-.239c.23-.344.33-.809.226-1.668c-.106-.875-.4-2.013-.82-3.629l-.083-.324c-.308-1.187-.527-2.025-.762-2.666c-.23-.627-.454-1.001-.738-1.281a3.3 3.3 0 0 0-.615-.476c-.343-.205-.761-.328-1.426-.393c-.68-.066-1.546-.067-2.772-.067s-2.092 0-2.771.067c-.665.065-1.084.188-1.427.393a3.3 3.3 0 0 0-.614.476c-.285.28-.509.654-.739 1.281c-.235.641-.453 1.48-.761 2.666l-.085.324c-.42 1.616-.713 2.754-.818 3.629c-.104.86-.006 1.324.225 1.668q.084.126.185.24c.275.31.7.52 1.558.637c.874.117 2.049.119 3.718.119z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLampOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2BoldIcon],svg[solar-laptop-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3M9.5 2h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2"></svg:path>`,
})
export class SolarLaptop2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2BoldDuotoneIcon],svg[solar-laptop-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3"></svg:path>`,
})
export class SolarLaptop2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2BrokenIcon],svg[solar-laptop-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4H14M3.5 15v-5c0-2.828 0-4.243.879-5.121C5.257 4 6.672 4 9.5 4h.5m2 16H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3"></svg:path>`,
})
export class SolarLaptop2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2LineDuotoneIcon],svg[solar-laptop-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"></svg:path></svg:g>`,
})
export class SolarLaptop2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2LinearIcon],svg[solar-laptop-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5"></svg:path><svg:path stroke-linecap="round" d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"></svg:path></svg:g>`,
})
export class SolarLaptop2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2OutlineIcon],svg[solar-laptop-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.445 3.25h5.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.323c.848.121 1.5.85 1.5 1.732v1A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17v-1a1.75 1.75 0 0 1 1.5-1.732V9.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M3 15.75a.25.25 0 0 0-.25.25v1A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17v-1a.25.25 0 0 0-.25-.25h-4.333c-.27 0-.534.088-.75.25l-.934.7a2.75 2.75 0 0 1-1.65.55h-2.666a2.75 2.75 0 0 1-1.65-.55l-.934-.7a1.25 1.25 0 0 0-.75-.25zm16.75-1.5h-3.083a2.75 2.75 0 0 0-1.65.55l-.934.7a1.25 1.25 0 0 1-.75.25h-2.666a1.25 1.25 0 0 1-.75-.25l-.934-.7a2.75 2.75 0 0 0-1.65-.55H4.25V10c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h5c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptop2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3BoldIcon],svg[solar-laptop-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h9c1.886 0 2.828 0 3.414-.586s.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3"></svg:path>`,
})
export class SolarLaptop3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3BoldDuotoneIcon],svg[solar-laptop-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h9c1.886 0 2.828 0 3.414-.586s.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3"></svg:path>`,
})
export class SolarLaptop3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3BrokenIcon],svg[solar-laptop-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 2c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414S5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586S20.5 12.886 20.5 11V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2H14m-2 20H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3"></svg:path>`,
})
export class SolarLaptop3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3LineDuotoneIcon],svg[solar-laptop-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414S5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586S20.5 12.886 20.5 11V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"></svg:path></svg:g>`,
})
export class SolarLaptop3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3LinearIcon],svg[solar-laptop-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414S5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586S20.5 12.886 20.5 11V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z"></svg:path><svg:path stroke-linecap="round" d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"></svg:path></svg:g>`,
})
export class SolarLaptop3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3OutlineIcon],svg[solar-laptop-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.445 1.25h5.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v3.107c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H7.448c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V7.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M6.308 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C4.252 5.562 4.25 6.564 4.25 8v3c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h9c.964 0 1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103h-5c-1.435 0-2.437.002-3.192.103M3 17.75a.25.25 0 0 0-.25.25v1A2.25 2.25 0 0 0 5 21.25h14A2.25 2.25 0 0 0 21.25 19v-1a.25.25 0 0 0-.25-.25h-4.333c-.27 0-.534.088-.75.25l-.934.7a2.75 2.75 0 0 1-1.65.55h-2.666a2.75 2.75 0 0 1-1.65-.55l-.934-.7a1.25 1.25 0 0 0-.75-.25zM1.25 18c0-.966.784-1.75 1.75-1.75h4.333a2.75 2.75 0 0 1 1.65.55l.934.7c.216.162.48.25.75.25h2.666c.27 0 .534-.088.75-.25l.934-.7a2.75 2.75 0 0 1 1.65-.55H21c.966 0 1.75.784 1.75 1.75v1A3.75 3.75 0 0 1 19 22.75H5A3.75 3.75 0 0 1 1.25 19z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptop3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopBoldIcon],svg[solar-laptop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.391 16.336l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .608-1.376L3.903 15h16.194zM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M4.353 7c0-1.886 0-2.828.586-3.414S6.467 3 8.353 3h7.294c1.886 0 2.829 0 3.414.586c.586.586.586 1.528.586 3.414v7H4.353zM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopBoldDuotoneIcon],svg[solar-laptop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.938 3.586c-.585.586-.585 1.528-.585 3.414v7h15.294V7c0-1.886 0-2.828-.586-3.414S17.532 3 15.647 3H8.353c-1.886 0-2.829 0-3.415.586" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m21.391 16.336l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092L3.903 15h16.194zM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class SolarLaptopBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopBrokenIcon],svg[solar-laptop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.647 15.536V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H12m7.647 11.536l1.744 1.8l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092l1.744-1.8m15.294 0h-2.611m-12.683 0V8c0-1.886 0-2.828.586-3.414S6.467 4 8.353 4m-4 11.536H13M9.5 18.5h5"></svg:path><svg:path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path></svg:g>`,
})
export class SolarLaptopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopLineDuotoneIcon],svg[solar-laptop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.647 15.536H4.353m15.294 0V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H8.353c-1.886 0-2.828 0-3.414.586S4.353 6.114 4.353 8v7.536m15.294 0l1.744 1.8l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092l1.744-1.8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 18.5h5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLaptopLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopLinearIcon],svg[solar-laptop-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.647 15.536H4.353m15.294 0V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H8.353c-1.886 0-2.828 0-3.414.586S4.353 6.114 4.353 8v7.536m15.294 0l1.744 1.8l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092l1.744-1.8M9.5 18.5h5"></svg:path><svg:path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path></svg:g>`,
})
export class SolarLaptopLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticBoldIcon],svg[solar-laptop-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 20.24c0-.42.344-.76.767-.76h20.466c.423 0 .767.34.767.76s-.344.76-.767.76H1.767A.764.764 0 0 1 1 20.24M3.69 3.89c-.9.89-.9 2.324-.9 5.19v5.067c0 1.91 0 2.866.6 3.46s1.564.593 3.494.593h10.232c1.93 0 2.895 0 3.494-.594c.6-.593.6-1.549.6-3.46V9.08c0-2.866 0-4.3-.9-5.19C19.411 3 17.964 3 15.07 3H8.93c-2.894 0-4.341 0-5.24.89m4.473 11.27c0-.42.343-.76.767-.76h6.14c.424 0 .767.34.767.76s-.343.76-.767.76H8.93a.764.764 0 0 1-.767-.76" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptopMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticBoldDuotoneIcon],svg[solar-laptop-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 20.24c0-.42.344-.76.767-.76h20.466c.423 0 .767.34.767.76s-.344.76-.767.76H1.767A.764.764 0 0 1 1 20.24" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.69 3.89c-.899.89-.899 2.324-.899 5.19v5.067c0 1.91 0 2.866.6 3.46c.599.593 1.564.593 3.493.593h10.233c1.93 0 2.894 0 3.493-.594c.6-.593.6-1.549.6-3.46V9.08c0-2.866 0-4.3-.9-5.19C19.412 3 17.965 3 15.07 3H8.93c-2.894 0-4.34 0-5.24.89" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.93 14.4a.764.764 0 0 0-.767.76c0 .42.344.76.768.76h6.14c.423 0 .767-.34.767-.76s-.344-.76-.768-.76z"></svg:path>`,
})
export class SolarLaptopMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticBrokenIcon],svg[solar-laptop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 10v4c0 1.886 0 2.828.586 3.414S5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586S21 15.886 21 14V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9c-2.828 0-4.243 0-5.121.879c-.49.49-.707 1.146-.803 2.121M22 21h-6M2 21h10m3-6H9"></svg:path>`,
})
export class SolarLaptopMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticLineDuotoneIcon],svg[solar-laptop-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v5c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></svg:path><svg:path stroke-linecap="round" d="M22 21H2m13-6H9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLaptopMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticLinearIcon],svg[solar-laptop-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v5c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></svg:path><svg:path stroke-linecap="round" d="M22 21H2m13-6H9"></svg:path></svg:g>`,
})
export class SolarLaptopMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticOutlineIcon],svg[solar-laptop-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.945 2.25h6.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v5.107c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H6.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V8.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M5.808 3.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C3.752 6.562 3.75 7.564 3.75 9v5c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h10c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V9c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H9c-1.435 0-2.437.002-3.192.103M8.25 15a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m-7 6a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptopMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopOutlineIcon],svg[solar-laptop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.3 3.25h7.4c.899 0 1.648 0 2.243.08c.627.084 1.194.27 1.65.725c.455.456.64 1.023.725 1.65c.08.595.08 1.345.08 2.243v7.284l1.513 1.561l.003.004l.008.007l.007.008l.006.006l.01.01l.01.011l.005.005l.008.009l.009.01l.008.01l.012.015c.372.43.703 1.074.748 1.717v.004l.003.023v.013l.002.014v.115c0 .13 0 .319-.005.4a2.75 2.75 0 0 1-2.57 2.57c-.088.006-.185.006-.311.006H4.137c-.126 0-.223 0-.31-.006a2.75 2.75 0 0 1-2.572-2.57a9 9 0 0 1-.004-.398v-.117l.001-.014v-.012l.003-.024v-.004c.046-.643.377-1.286.749-1.717l.012-.015l.008-.01l.01-.01l.007-.009l.004-.005l.011-.01l.01-.011l.005-.006l.008-.008l.007-.007l.004-.004l1.513-1.561V7.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.344-.08 2.243-.08M4.67 16.286l-1.514 1.563c-.227.253-.394.626-.405.877v.223l.001.13a1.25 1.25 0 0 0 1.17 1.168c.033.003.078.003.239.003h15.678c.16 0 .206 0 .24-.003a1.25 1.25 0 0 0 1.168-1.168l.001-.035l.001-.257v-.06c-.011-.252-.178-.625-.406-.878l-1.514-1.563zm14.227-1.5V8c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H8.353c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.238.327-.3.788c-.065.483-.066 1.131-.066 2.095v6.786zM2.331 18.024l-.031-.012l.009.005zm6.419.476a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class SolarLaptopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersBoldIcon],svg[solar-layers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685"></svg:path><svg:path fill="currentColor" d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686"></svg:path>`,
})
export class SolarLayersBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersBoldDuotoneIcon],svg[solar-layers-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" opacity=".7"></svg:path><svg:path fill="currentColor" d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" opacity=".4"></svg:path>`,
})
export class SolarLayersBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersBrokenIcon],svg[solar-layers-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712"></svg:path><svg:path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"></svg:path><svg:path stroke-linecap="round" d="M19.021 17.685C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20c.954 0 1.764-.237 3-.712"></svg:path></svg:g>`,
})
export class SolarLayersBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersLineDuotoneIcon],svg[solar-layers-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLayersLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersLinearIcon],svg[solar-layers-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"></svg:path><svg:path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14"></svg:path></svg:g>`,
})
export class SolarLayersLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticBoldIcon],svg[solar-layers-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75s-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 11.442v-.002l.003.003l.024.021q.036.03.118.094c.109.084.278.208.508.357c.46.299 1.161.697 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12 12 0 0 0 2.104-1.074a8 8 0 0 0 .65-.472l.003-.002l.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001l-.005.004l-.014.012l-.045.039a9 9 0 0 1-.77.558A13.7 13.7 0 0 1 19.3 14.38l-2.809 1.124l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.7 13.7 0 0 1-2.363-1.207a9 9 0 0 1-.771-.558l-.045-.039l-.014-.012l-.005-.004l-.001-.002H1.5L2 12l-.5.559a.75.75 0 0 1 1-1.119m-.001 4a.75.75 0 0 0-1.057.06zm0 0l.004.003l.024.021q.036.03.118.094c.109.084.278.208.508.357c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12 12 0 0 0 2.104-1.074a8 8 0 0 0 .65-.472l.003-.002l.001-.001a.75.75 0 0 1 1 1.118l-.484-.54l.484.54l-.002.002l-.001.001l-.005.004l-.014.012q-.016.015-.045.038a9 9 0 0 1-.77.558a13.7 13.7 0 0 1-2.364 1.208l-2.809 1.124l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.7 13.7 0 0 1-2.363-1.207a9 9 0 0 1-.771-.558l-.045-.039l-.014-.012l-.005-.004l-.001-.002H1.5L2 16l-.5.559a.75.75 0 0 1-.058-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarLayersMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticBoldDuotoneIcon],svg[solar-layers-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75s-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97z"></svg:path><svg:path fill="currentColor" d="M2.502 11.443L2.5 11.44a.75.75 0 0 0-1 1.119L2 12l-.5.559l.002.002l.005.004l.014.012l.045.039q.057.047.161.129c.14.108.343.256.61.429c.533.346 1.32.79 2.363 1.207l2.809 1.124l.115.046c1.877.751 2.997 1.199 4.376 1.199s2.499-.448 4.375-1.199l.116-.046L19.3 14.38a13.7 13.7 0 0 0 2.363-1.207a9 9 0 0 0 .771-.558l.045-.039l.014-.012l.005-.004l.001-.002h.002a.75.75 0 0 0-1-1.119l-.002.002l-.002.001l-.024.021l-.118.094a8 8 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138L5.257 12.99a12 12 0 0 1-2.104-1.074a8 8 0 0 1-.65-.472" opacity=".7"></svg:path><svg:path fill="currentColor" d="M2.499 15.5a.75.75 0 0 0-1 1.118H1.5l.002.002l.005.004l.014.012l.045.039l.161.13c.14.107.343.255.61.428c.533.346 1.32.79 2.363 1.207l2.809 1.124l.115.046c1.877.751 2.997 1.2 4.376 1.2s2.499-.449 4.375-1.2l.116-.046L19.3 18.44a13.7 13.7 0 0 0 2.363-1.208a9 9 0 0 0 .771-.558l.045-.039l.014-.012l.005-.004l.001-.001l.002-.002a.75.75 0 0 0-1-1.118l-.002.002l-.002.001l-.024.021l-.118.094a8 8 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138l-2.809-1.123a12 12 0 0 1-2.104-1.073a8 8 0 0 1-.626-.452l-.025-.02z" opacity=".4"></svg:path>`,
})
export class SolarLayersMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticBrokenIcon],svg[solar-layers-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m0 4s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20c.954 0 1.764-.237 3-.712m4.021-1.603C21.007 16.891 22 16 22 16M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712"></svg:path>`,
})
export class SolarLayersMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticLineDuotoneIcon],svg[solar-layers-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path stroke-linecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLayersMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticLinearIcon],svg[solar-layers-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path stroke-linecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16"></svg:path></svg:g>`,
})
export class SolarLayersMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticOutlineIcon],svg[solar-layers-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.75c-1.06 0-1.91.328-3.934 1.138L5.257 7.01c-1.01.404-1.71.686-2.164.924L2.973 8l.12.065c.454.238 1.154.52 2.164.924l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.404 1.71-.686 2.164-.924l.12-.065l-.12-.065c-.454-.238-1.154-.52-2.164-.924l-2.809-1.123C13.91 5.078 13.06 4.75 12 4.75m-4.376-.301C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l.115.046l2.854 1.142c.955.382 1.728.69 2.259.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.53.278-1.303.587-2.258.97l-2.854 1.14l-.115.047c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046l-2.854-1.142c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97l2.854-1.14zM2.5 11.44l.004.003l.024.021q.036.03.118.094c.109.084.278.208.508.357c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12 12 0 0 0 2.104-1.074a8 8 0 0 0 .65-.472l.003-.002l.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001l-.005.004l-.014.012l-.045.039a9 9 0 0 1-.77.558A13.7 13.7 0 0 1 19.3 14.38l-2.809 1.124l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.7 13.7 0 0 1-2.363-1.207a9 9 0 0 1-.771-.558l-.045-.039l-.014-.012l-.005-.004l-.001-.002H1.5L2 12l-.5.559a.75.75 0 0 1 .999-1.119m19 4.001l.002-.001a.75.75 0 0 1 1 1.118L22 16l.5.558v.002l-.002.001l-.005.004l-.014.012q-.016.015-.045.038a9 9 0 0 1-.77.558a13.7 13.7 0 0 1-2.364 1.208l-2.809 1.124l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.7 13.7 0 0 1-2.363-1.207a9 9 0 0 1-.771-.558l-.045-.039l-.014-.012l-.005-.004l-.001-.002H1.5L2 16l-.5.559a.75.75 0 0 1 1-1.118l.003.002l.024.021q.036.03.118.094c.109.084.278.208.508.357c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12 12 0 0 0 2.104-1.074a8 8 0 0 0 .65-.472z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLayersMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersOutlineIcon],svg[solar-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.75c-1.06 0-1.91.328-3.934 1.138L5.257 7.01c-1.01.404-1.71.686-2.164.924L2.973 8l.12.065c.454.238 1.154.52 2.164.924l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.404 1.71-.686 2.164-.924l.12-.065l-.12-.065c-.454-.238-1.154-.52-2.164-.924l-2.809-1.123C13.91 5.078 13.06 4.75 12 4.75m-4.376-.301C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l.115.046l2.854 1.142c.955.382 1.728.69 2.259.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.351.184-.81.382-1.356.606a17 17 0 0 1 1.357.606c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.351.184-.81.382-1.356.606a17 17 0 0 1 1.357.606c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.192-.46.352-.73.493c-.53.278-1.303.588-2.258.97l-2.854 1.14l-.115.047c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046l-2.854-1.142c-.955-.381-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493c-.206-.198-.417-.498-.417-.901s.21-.703.417-.901c.2-.193.46-.352.73-.493c.351-.184.81-.382 1.356-.606a17 17 0 0 1-1.357-.606a3.2 3.2 0 0 1-.729-.493c-.206-.198-.417-.498-.417-.901s.21-.703.417-.901c.2-.193.46-.352.73-.493c.351-.184.81-.382 1.356-.606a17 17 0 0 1-1.357-.606a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97l2.854-1.14zm-1.858 6.359l-.509.203c-1.01.404-1.71.686-2.164.924l-.12.065l.12.066c.454.237 1.154.518 2.164.923l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.405 1.71-.686 2.164-.924l.12-.065l-.12-.066c-.454-.237-1.154-.519-2.164-.923l-.51-.203l-1.742.697l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046zm0 4l-.509.203c-1.01.404-1.71.686-2.164.924l-.12.065l.12.066c.454.237 1.154.518 2.164.923l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.405 1.71-.686 2.164-.924l.12-.065l-.12-.066c-.454-.237-1.154-.519-2.164-.923l-.51-.203l-1.742.697l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLayersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafBoldIcon],svg[solar-leaf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183"></svg:path>`,
})
export class SolarLeafBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafBoldDuotoneIcon],svg[solar-leaf-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.463 2.326A3.45 3.45 0 0 0 12 2v7l4.432-4.432c-.863-.947-1.86-1.724-2.97-2.242" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 9v5.5l6.614-6.614c-.572-1.22-1.308-2.357-2.182-3.318z" opacity=".4"></svg:path><svg:path fill="currentColor" d="m12 19.5l7.811-7.811a15 15 0 0 0-1.197-3.803L12 14.5z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M19.811 11.689L12 19.5V22c4.418 0 8-3.646 8-8.143c0-.71-.064-1.438-.189-2.168" opacity=".7"></svg:path>`,
})
export class SolarLeafBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafBrokenIcon],svg[solar-leaf-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 9l4-4m-4 9.5l3-3M18.5 8l-1.625 1.625M12 19.5l1.875-1.875M19.5 12l-3.75 3.75M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-1.586.323-3.266.917-4.857M12 22V2m0 0c-.5 0-.999.109-1.463.326c-1.601.748-2.97 2.036-4.037 3.6"></svg:path>`,
})
export class SolarLeafBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafLineDuotoneIcon],svg[solar-leaf-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5" opacity=".5"></svg:path><svg:path d="M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2"></svg:path></svg:g>`,
})
export class SolarLeafLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafLinearIcon],svg[solar-leaf-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2"></svg:path>`,
})
export class SolarLeafLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafOutlineIcon],svg[solar-leaf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.22 1.646a4.2 4.2 0 0 1 3.56 0c2.176 1.017 3.914 2.92 5.104 5.112c1.192 2.194 1.866 4.734 1.866 7.099c0 4.899-3.905 8.893-8.75 8.893s-8.75-3.994-8.75-8.893c0-2.365.674-4.905 1.866-7.099c1.19-2.191 2.928-4.095 5.104-5.112m1.03 1.21a3 3 0 0 0-.395.149c-1.809.845-3.339 2.476-4.421 4.469c-1.081 1.99-1.684 4.286-1.684 6.383c0 3.836 2.858 6.971 6.5 7.354zm1.5 0V7.19l2.628-2.628a8.4 8.4 0 0 0-2.233-1.556a3 3 0 0 0-.395-.149m3.636 2.818L12.75 9.311v3.378l4.954-4.954l-.138-.261a12.7 12.7 0 0 0-1.18-1.8m1.972 3.529L12.75 14.81v2.878l6.22-6.22l.047.049a14 14 0 0 0-.66-2.315m.88 4.12l-6.488 6.488v1.4c3.642-.383 6.5-3.518 6.5-7.354q0-.265-.013-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarLeafOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterBoldIcon],svg[solar-letter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterBoldDuotoneIcon],svg[solar-letter-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12s0-6.364-1.289-7.682S18.348 3 14.2 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.128 8.033a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92z"></svg:path>`,
})
export class SolarLetterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterBrokenIcon],svg[solar-letter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="m18 8l-2.159 1.8c-1.836 1.53-2.755 2.295-3.841 2.295c-.65 0-1.239-.274-2-.82M6 8l.9.75l.9.75"></svg:path></svg:g>`,
})
export class SolarLetterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterLineDuotoneIcon],svg[solar-letter-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8"></svg:path></svg:g>`,
})
export class SolarLetterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterLinearIcon],svg[solar-letter-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8"></svg:path></svg:g>`,
})
export class SolarLetterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedBoldIcon],svg[solar-letter-opened-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22h4c3.771 0 5.657 0 6.828-1.171S22 17.77 22 14s0-5.657-1.172-6.828c-.362-.363-.794-.613-1.328-.786v2.773c.003.34.009.911-.236 1.433c-.244.522-.686.884-.95 1.1q-.04.03-.073.06l-1.507 1.255c-.86.718-1.61 1.342-2.284 1.776c-.725.466-1.51.812-2.45.812s-1.724-.346-2.45-.812c-.674-.434-1.423-1.058-2.284-1.775l-1.507-1.256l-.073-.06c-.264-.216-.705-.578-.95-1.1c-.244-.522-.24-1.093-.237-1.433l.001-.096V6.385c-.534.173-.966.424-1.328.787C2 8.343 2 10.229 2 14s0 5.657 1.172 6.829S6.229 22 10 22"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m6.72 10.6l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296l1.44-1.2c.353-.294.53-.442.625-.643c.094-.202.094-.432.094-.893V7q0-.48-.002-.898c-.012-1.771-.098-2.737-.73-3.37C16.536 2 15.358 2 13 2h-2c-2.357 0-3.535 0-4.268.732c-.632.633-.72 1.599-.732 3.37Q5.998 6.519 6 7v2.063c0 .46 0 .691.095.893c.094.201.27.349.625.644M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterOpenedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedBoldDuotoneIcon],svg[solar-letter-opened-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.72 10.6l1.439 1.2c1.836 1.53 2.755 2.295 3.84 2.295c1.087 0 2.005-.765 3.842-2.296l1.44-1.2c.353-.294.53-.442.624-.643c.095-.202.095-.432.095-.893V7q0-.48-.002-.898c-.012-1.771-.098-2.737-.73-3.37C16.535 2 15.357 2 13 2h-2c-2.357 0-3.536 0-4.268.732c-.633.633-.72 1.599-.732 3.37v2.961c0 .46 0 .691.094.893c.095.201.272.349.625.644M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.159 11.8l-1.44-1.2c-.353-.295-.53-.442-.625-.644S6 9.524 6 9.064V6.102c-1.3.128-2.175.417-2.828 1.07C2 8.343 2 10.23 2 14.002c0 3.77 0 5.656 1.172 6.827S6.229 22.002 10 22.002h4c3.771 0 5.657 0 6.828-1.172S22 17.773 22 14.002s0-5.658-1.172-6.83c-.653-.653-1.529-.942-2.83-1.07q.002.42.002.9v2.063c0 .46 0 .69-.095.892c-.094.202-.27.35-.625.644l-1.44 1.2c-1.836 1.53-2.754 2.295-3.84 2.295S9.995 13.33 8.159 11.8" opacity=".5"></svg:path>`,
})
export class SolarLetterOpenedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedBrokenIcon],svg[solar-letter-opened-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102m12 0c1.3.127 2.175.416 2.828 1.07c.654.653.943 1.528 1.07 2.828M10 6h4m-3 3h2"></svg:path><svg:path d="M14 2.002c1.707.014 2.647.11 3.268.73c.732.732.732 1.91.732 4.267v2.064c0 .46 0 .69-.094.892c-.095.202-.272.35-.626.644l-.72.6M10 2.002c-1.707.014-2.647.11-3.268.73C6 3.464 6 4.642 6 6.999v2.064c0 .46 0 .69.094.892c.095.202.272.35.626.644l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295c.65 0 1.239-.273 2-.82"></svg:path></svg:g>`,
})
export class SolarLetterOpenedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedLineDuotoneIcon],svg[solar-letter-opened-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 6h4m-3 3h2m-4.841 2.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268S8.643 2 11 2h2c2.357 0 3.535 0 4.268.732S18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785s-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296s-2.004-.765-3.841-2.296Z"></svg:path><svg:path stroke-linecap="round" d="m6 10l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 10"></svg:path></svg:g>`,
})
export class SolarLetterOpenedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedLinearIcon],svg[solar-letter-opened-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102"></svg:path><svg:path stroke-linecap="round" d="M10 6h4m-3 3h2m-4.841 2.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268S8.643 2 11 2h2c2.357 0 3.535 0 4.268.732S18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785s-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296s-2.004-.765-3.841-2.296Z"></svg:path><svg:path stroke-linecap="round" d="m6 10l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 10"></svg:path></svg:g>`,
})
export class SolarLetterOpenedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedOutlineIcon],svg[solar-letter-opened-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.946 1.25h2.108c1.133 0 2.058 0 2.79.098c.763.103 1.425.325 1.954.854s.751 1.19.854 1.955c.05.376.075.803.087 1.283c1.058.17 1.925.507 2.62 1.201c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.113c0 1.837 0 3.293-.153 4.432c-.158 1.173-.49 2.122-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.748-1.08-1.697-1.238-2.87c-.153-1.139-.153-2.595-.153-4.432v-.113c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.695-.694 1.562-1.03 2.62-1.2c.012-.481.037-.908.087-1.284c.103-.764.325-1.426.854-1.955s1.19-.751 1.955-.854c.73-.098 1.656-.098 2.79-.098M5.25 6.966c-.731.147-1.194.382-1.548.736c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.001 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.289c-.135-1.006-.389-1.586-.812-2.009c-.354-.354-.817-.59-1.548-.736v1.297c0 .786.002 1.409-.26 1.967c-.26.557-.74.955-1.344 1.458l-.105.088l-.757.63c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745l-.757-.631q-.053-.046-.105-.088c-.604-.503-1.083-.9-1.344-1.458s-.26-1.18-.26-1.967zm3.107-4.131c-.598.08-.89.224-1.094.428s-.348.496-.428 1.094C6.752 4.976 6.75 5.8 6.75 7v1.127c0 .99.017 1.25.118 1.466c.101.217.29.396 1.051 1.03l.72.6c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l.72-.6c.761-.634.95-.813 1.051-1.03c.101-.216.118-.475.118-1.466V7c0-1.2-.002-2.024-.085-2.643c-.08-.598-.224-.89-.428-1.094s-.496-.348-1.094-.428C15.024 2.752 14.2 2.75 13 2.75h-2c-1.2 0-2.024.002-2.643.085M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterOpenedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOutlineIcon],svg[solar-letter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14m-.287 2.63a.75.75 0 0 1 1.056-.096L8.64 9.223c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 1 1 .96 1.153l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1-.096-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBoldIcon],svg[solar-letter-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 5h-4C6.229 5 4.343 5 3.172 6.172S2 9.229 2 13s0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13c0-1.453 0-2.627-.067-3.587A4.48 4.48 0 0 1 19 10.5c-.479 0-.94-.075-1.373-.213l-1.343 1.12c-.887.738-1.605 1.337-2.24 1.745c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 9.577a.75.75 0 0 1 .96-1.153l2.159 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l.84-.7A4.49 4.49 0 0 1 14.61 5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBoldDuotoneIcon],svg[solar-letter-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-6.766 2.464l-1.537 1.28c-1.026.856-1.738 1.447-2.34 1.834c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92l1.666-1.388a4.5 4.5 0 0 1-1.144-1.194"></svg:path><svg:path fill="currentColor" d="M18.454 6.587a.825.825 0 0 1 .958.959a3 3 0 0 1-.958-.959"></svg:path><svg:path fill="currentColor" d="M16.958 3.021C16.156 3 15.244 3 14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12c0-1.067 0-2-.02-2.82a4.4 4.4 0 0 1-1.98.468c-2.485 0-4.5-2.06-4.5-4.603c0-.726.165-1.413.458-2.024" opacity=".5"></svg:path>`,
})
export class SolarLetterUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBrokenIcon],svg[solar-letter-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.946.018-1.273 0-2m-9-6h-3C6.229 4 4.343 4 3.172 5.172C2.518 5.825 2.229 6.7 2.102 8"></svg:path><svg:path stroke-linecap="round" d="m6 8l1.664 1.387m8.177.412c-1.836 1.53-2.755 2.296-3.841 2.296c-.65 0-1.239-.274-2-.82"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarLetterUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadLineDuotoneIcon],svg[solar-letter-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10c.018.727 0 1.054 0 2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarLetterUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadLinearIcon],svg[solar-letter-unread-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10c.018.727 0 1.054 0 2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h3"></svg:path><svg:path stroke-linecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarLetterUnreadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadOutlineIcon],svg[solar-letter-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M9.944 3.25H13a.75.75 0 0 1 0 1.5h-3c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289c0-.373.003-.645.005-.88c.004-.379.007-.658-.005-1.1a.75.75 0 0 1 1.5-.04c.012.467.009.785.005 1.187c-.002.234-.005.497-.005.833v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-4.52 4.27a.75.75 0 0 1 1.056-.096l2.16 1.8c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667a.75.75 0 1 1 .96 1.152l-.037.032c-.887.738-1.605 1.337-2.24 1.745c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1-.096-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryBoldIcon],svg[solar-library-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.891c-.447-3.05-.67-4.574.278-5.561s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLibraryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryBoldDuotoneIcon],svg[solar-library-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity=".7"></svg:path>`,
})
export class SolarLibraryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryBrokenIcon],svg[solar-library-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke-linecap="round" d="M15 18H9m12.194-1.207c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path></svg:g>`,
})
export class SolarLibraryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryLineDuotoneIcon],svg[solar-library-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 18H9"></svg:path><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarLibraryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryLinearIcon],svg[solar-library-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke-linecap="round" d="M15 18H9"></svg:path><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarLibraryLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryOutlineIcon],svg[solar-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"></svg:path></svg:g>`,
})
export class SolarLibraryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoldIcon],svg[solar-lightbulb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarLightbulbBold0"><svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#fff" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.003-.003l.005-.006l.025-.027l.088-.09q.112-.113.312-.3c.268-.252.647-.599 1.157-1.067A7.74 7.74 0 0 0 19 9.674C19 5.436 15.642 2 11.5 2m1.57 17.932q.011-.113.015-.258h-3.17q.004.145.014.258c.019.21.05.286.071.324a.7.7 0 0 0 .25.255c.037.022.111.054.316.073c.214.02.497.02.934.02s.72 0 .934-.02c.205-.019.279-.05.316-.073a.7.7 0 0 0 .25-.255c.021-.038.052-.114.07-.324"></svg:path><svg:path fill="#000" d="M9.274 13.35a.75.75 0 0 1 1.025.274a1.25 1.25 0 0 0 2.166 0a.75.75 0 1 1 1.298.752a2.76 2.76 0 0 1-1.631 1.27V17a.75.75 0 0 1-1.5 0v-1.354A2.76 2.76 0 0 1 9 14.376a.75.75 0 0 1 .274-1.025"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarLightbulbBold0)"></svg:path>`,
})
export class SolarLightbulbBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoldDuotoneIcon],svg[solar-lightbulb-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.674C4 5.436 7.358 2 11.5 2S19 5.436 19 9.674a7.74 7.74 0 0 1-2.499 5.72c-.51.467-.889.814-1.157 1.066a15 15 0 0 0-.4.39l-.025.027l-.005.006l-.003.003c-.237.3-.288.376-.318.446s-.053.16-.113.54c-.023.15-.026.406-.026 1.105v.03c0 .409 0 .762-.025 1.051c-.027.306-.087.61-.248.895a2.07 2.07 0 0 1-.75.767c-.278.165-.575.226-.874.254c-.283.026-.628.026-1.028.026h-.058c-.4 0-.745 0-1.028-.026c-.3-.028-.596-.09-.875-.254a2.07 2.07 0 0 1-.749-.767c-.16-.285-.22-.588-.248-.895c-.026-.29-.026-.642-.026-1.051v-.03c0-.699-.002-.955-.026-1.105c-.06-.38-.081-.47-.112-.54c-.03-.07-.081-.147-.318-.446l-.003-.003l-.005-.006l-.025-.027l-.088-.09a15 15 0 0 0-.312-.3c-.268-.252-.647-.599-1.157-1.067A7.74 7.74 0 0 1 4 9.674" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.298 13.625a.75.75 0 1 0-1.299.75a2.76 2.76 0 0 0 1.632 1.271V17a.75.75 0 0 0 1.5 0v-1.353a2.76 2.76 0 0 0 1.632-1.271a.75.75 0 0 0-1.299-.751a1.249 1.249 0 0 1-2.166 0m-.384 6.05h3.17a4 4 0 0 1-.014.258c-.018.209-.05.285-.071.323a.7.7 0 0 1-.25.255c-.037.022-.111.054-.316.073c-.214.02-.496.02-.934.02c-.437 0-.72 0-.934-.02c-.204-.019-.279-.05-.316-.073a.7.7 0 0 1-.25-.255c-.02-.038-.052-.114-.07-.323a5 5 0 0 1-.015-.259"></svg:path>`,
})
export class SolarLightbulbBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltBoldIcon],svg[solar-lightbulb-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.008-.01l.025-.026l.088-.09q.112-.113.312-.3c.268-.252.647-.599 1.157-1.067A7.74 7.74 0 0 0 19 9.674C19 5.436 15.642 2 11.5 2m1.585 17.674h-3.17q.004.145.014.258c.019.21.05.286.071.324a.7.7 0 0 0 .25.255c.037.022.111.054.316.073c.214.02.497.02.934.02s.72 0 .934-.02c.205-.019.279-.05.316-.073a.7.7 0 0 0 .25-.255c.021-.038.052-.114.07-.324q.011-.113.015-.258M12.61 8.176c.307.224.378.66.159.974l-1.178 1.687h1.402a.68.68 0 0 1 .607.379a.71.71 0 0 1-.052.724L11.6 14.731a.67.67 0 0 1-.951.162a.71.71 0 0 1-.158-.973l1.178-1.687h-1.403a.68.68 0 0 1-.606-.379a.71.71 0 0 1 .051-.725l1.948-2.79a.67.67 0 0 1 .951-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightbulbBoltBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltBoldDuotoneIcon],svg[solar-lightbulb-bolt-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.674C4 5.436 7.358 2 11.5 2S19 5.436 19 9.674a7.74 7.74 0 0 1-2.499 5.72c-.51.467-.889.814-1.157 1.066a15 15 0 0 0-.4.39l-.025.027l-.008.01c-.237.298-.288.375-.318.445s-.053.16-.113.54c-.023.15-.026.406-.026 1.105v.03c0 .409 0 .762-.025 1.051c-.027.306-.087.61-.248.895a2.07 2.07 0 0 1-.75.767c-.278.165-.575.226-.874.254c-.283.026-.628.026-1.028.026h-.058c-.4 0-.745 0-1.028-.026c-.3-.028-.596-.09-.875-.254a2.07 2.07 0 0 1-.749-.767c-.16-.285-.22-.588-.248-.895c-.026-.29-.026-.642-.026-1.051v-.03c0-.699-.002-.955-.026-1.105c-.06-.38-.081-.47-.112-.54c-.03-.07-.081-.147-.318-.446l-.008-.01l-.025-.026l-.088-.09a15 15 0 0 0-.312-.3c-.268-.252-.647-.599-1.157-1.067A7.74 7.74 0 0 1 4 9.674" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.085 19.675h-3.17q.004.144.014.258c.018.21.05.285.071.323a.7.7 0 0 0 .25.256c.037.021.111.054.316.072c.214.02.496.021.934.021c.437 0 .72 0 .934-.02c.204-.02.279-.052.316-.073a.7.7 0 0 0 .25-.256c.02-.038.052-.114.07-.323q.01-.113.015-.258M12.61 8.177c.307.224.378.66.159.973l-1.178 1.688h1.402a.68.68 0 0 1 .606.378a.71.71 0 0 1-.051.725L11.6 14.73a.67.67 0 0 1-.951.163a.71.71 0 0 1-.159-.973l1.178-1.688h-1.402a.68.68 0 0 1-.606-.379a.71.71 0 0 1 .051-.724l1.948-2.79a.67.67 0 0 1 .951-.163"></svg:path>`,
})
export class SolarLightbulbBoltBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltBrokenIcon],svg[solar-lightbulb-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.48 7.48 0 0 0 19.5 9.5a7.5 7.5 0 0 0-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3"></svg:path><svg:path stroke-linejoin="round" d="m12.786 8.5l-2.143 3h3l-2.143 3"></svg:path></svg:g>`,
})
export class SolarLightbulbBoltBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltLineDuotoneIcon],svg[solar-lightbulb-bolt-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69c-.487.601-.508.65-.63 1.413c-.039.237-.039.593-.039 1.307c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"></svg:path><svg:path d="M14.5 19.5h-5" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12.786 8.5l-2.143 3h3l-2.143 3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLightbulbBoltLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltLinearIcon],svg[solar-lightbulb-bolt-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12.786 8.5l-2.143 3h3l-2.143 3"></svg:path></svg:g>`,
})
export class SolarLightbulbBoltLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltOutlineIcon],svg[solar-lightbulb-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75a6.75 6.75 0 0 0-4.5 11.78l.003.004c.557.499.98.877 1.282 1.155c.285.26.51.474.629.62l.012.015c.222.273.414.511.542.796c.127.284.175.587.231.934l.003.02c.029.178.04.396.045.676h3.506c.005-.28.016-.498.045-.676l.003-.02c.056-.347.104-.65.231-.934c.128-.285.32-.523.542-.796l.012-.015c.119-.146.344-.36.629-.62c.302-.278.725-.656 1.282-1.155l.004-.004A6.75 6.75 0 0 0 12 2.75m1.744 17.5h-3.488q.006.155.016.277c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.059-.123.079-.348q.01-.122.016-.277M3.75 9.5a8.25 8.25 0 1 1 13.752 6.148a169 169 0 0 0-1.274 1.146a16 16 0 0 0-.44.42l-.036.039c-.26.321-.317.404-.35.479c-.034.075-.058.172-.123.58c-.026.161-.029.437-.029 1.188v.032c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V19.5c0-.75-.003-1.027-.029-1.188c-.065-.408-.09-.505-.123-.58s-.09-.158-.35-.48l-.01-.01l-.026-.029l-.097-.097a17 17 0 0 0-.343-.322c-.295-.27-.712-.643-1.274-1.146A8.23 8.23 0 0 1 3.75 9.5"></svg:path><svg:path d="M13.222 7.89a.75.75 0 0 1 .174 1.046L12.1 10.75h1.543a.75.75 0 0 1 .61 1.186l-2.143 3a.75.75 0 1 1-1.22-.872l1.295-1.814h-1.542a.75.75 0 0 1-.61-1.186l2.142-3a.75.75 0 0 1 1.047-.174"></svg:path></svg:g>`,
})
export class SolarLightbulbBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBrokenIcon],svg[solar-lightbulb-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"></svg:path><svg:path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.48 7.48 0 0 0 19.5 9.5a7.5 7.5 0 0 0-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3"></svg:path></svg:g>`,
})
export class SolarLightbulbBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbLineDuotoneIcon],svg[solar-lightbulb-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69c-.487.601-.508.65-.63 1.413c-.039.237-.039.593-.039 1.307c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"></svg:path><svg:path d="M14.5 19.5h-5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 17v-2m0 0a2 2 0 0 0 1.732-1M12 15a2 2 0 0 1-1.732-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLightbulbLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbLinearIcon],svg[solar-lightbulb-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"></svg:path><svg:path stroke-linecap="round" d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"></svg:path></svg:g>`,
})
export class SolarLightbulbLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBoldIcon],svg[solar-lightbulb-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76m.667 2.532c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76a.754.754 0 0 1-.75.759h-2.666a.755.755 0 0 1-.75-.76" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446"></svg:path>`,
})
export class SolarLightbulbMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBoldDuotoneIcon],svg[solar-lightbulb-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76m.667 2.531c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76s-.335.76-.75.76h-2.666a.755.755 0 0 1-.75-.76" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightbulbMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBrokenIcon],svg[solar-lightbulb-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19.5h4M10.667 22h2.666M15 2.602A7.7 7.7 0 0 0 12 2C8.134 2 5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379l1.105 1.039c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157c0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218c0-.78-.164-1.528-.462-2.218"></svg:path>`,
})
export class SolarLightbulbMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticLineDuotoneIcon],svg[solar-lightbulb-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 19.5h4M10.667 22h2.666" opacity=".5"></svg:path><svg:path d="m7.41 13.68l1.105 1.04c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157c0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218C19 4.807 15.866 2 12 2S5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379Z"></svg:path></svg:g>`,
})
export class SolarLightbulbMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticLinearIcon],svg[solar-lightbulb-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 19.5h4M10.667 22h2.666"></svg:path><svg:path d="m7.41 13.68l1.105 1.04c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157c0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218C19 4.807 15.866 2 12 2S5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379Z"></svg:path></svg:g>`,
})
export class SolarLightbulbMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticOutlineIcon],svg[solar-lightbulb-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 19.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.667 2.5a.75.75 0 0 1 .75-.75h2.666a.75.75 0 0 1 0 1.5h-2.666a.75.75 0 0 1-.75-.75M4.25 8.218C4.25 4.313 7.804 1.25 12 1.25s7.75 3.063 7.75 6.968v.003c-.01 2.207-.959 4.405-2.645 6.004l-.002.002L16 15.266a.8.8 0 0 0-.249.577a1.907 1.907 0 0 1-1.907 1.907h-3.686a1.907 1.907 0 0 1-1.907-1.907a.8.8 0 0 0-.25-.577l-1.103-1.04l-.003-.001C5.21 12.625 4.26 10.428 4.25 8.22zm1.5-.002c.008 1.786.78 3.595 2.176 4.92l1.103 1.038c.46.433.721 1.037.721 1.669c0 .225.182.407.407.407h3.686a.407.407 0 0 0 .407-.407c0-.632.261-1.236.721-1.67l1.102-1.037h.001c1.396-1.325 2.168-3.134 2.176-4.92C18.249 5.3 15.535 2.75 12 2.75S5.751 5.3 5.75 8.216" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightbulbMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbOutlineIcon],svg[solar-lightbulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a6.75 6.75 0 0 0-4.5 11.78l.003.004c.557.499.98.877 1.282 1.155c.285.26.51.474.629.62l.012.015c.222.273.414.511.542.796c.127.284.175.587.231.934l.003.02c.029.178.04.396.045.676h3.506c.005-.28.016-.498.045-.676l.003-.02c.056-.347.104-.65.231-.934c.128-.285.32-.523.542-.796l.012-.015c.119-.146.344-.36.629-.62c.302-.278.725-.656 1.282-1.155l.004-.004A6.75 6.75 0 0 0 12 2.75m1.744 17.5h-3.488q.006.155.016.277c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.059-.123.079-.348q.01-.122.016-.277M3.75 9.5a8.25 8.25 0 1 1 13.752 6.148a169 169 0 0 0-1.274 1.146a16 16 0 0 0-.44.42l-.036.039c-.26.321-.317.404-.35.479c-.034.075-.058.172-.123.58c-.026.161-.029.437-.029 1.188v.032c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V19.5c0-.75-.003-1.027-.029-1.188c-.065-.408-.09-.505-.123-.58s-.09-.158-.35-.48l-.01-.01l-.026-.029l-.097-.097a17 17 0 0 0-.343-.322c-.295-.27-.712-.643-1.274-1.146A8.23 8.23 0 0 1 3.75 9.5m6.142 3.85a.75.75 0 0 1 1.025.274a1.25 1.25 0 0 0 2.166 0a.75.75 0 1 1 1.299.752a2.76 2.76 0 0 1-1.632 1.27V17a.75.75 0 0 1-1.5 0v-1.354a2.76 2.76 0 0 1-1.632-1.27a.75.75 0 0 1 .274-1.025" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightbulbOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningBoldIcon],svg[solar-lightning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12zM10.733 7c-.854 0-1.601 0-2.233.048V5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2s2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v1.548C14.868 7 14.121 7 13.267 7zM11 3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path><svg:path d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h.45v2a.75.75 0 0 0 1.5 0v-2h.45c2.263 0 3.394 0 4.097-.692C18 18.615 18 17.5 18 15.273v-2.546c0-2.228 0-3.342-.703-4.035C16.594 8 15.463 8 13.2 8m-.75 3.4a.75.75 0 0 1 .15 1.05l-.6.8h1.5a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 1 1-1.2-.9l.6-.8h-1.5a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.05-.15"></svg:path></svg:g>`,
})
export class SolarLightningBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningBoldDuotoneIcon],svg[solar-lightning-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarLightningBoldDuotone0" fill="currentColor" d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:use href="#solarLightningBoldDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="M10.25 4.75A.75.75 0 0 1 11 4h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"></svg:path><svg:use href="#solarLightningBoldDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="M8.5 5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2s2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v2.55C14.898 8 14.148 8 13.2 8h-2.4c-.948 0-1.697 0-2.3.05z" opacity=".5"></svg:path>`,
})
export class SolarLightningBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningBrokenIcon],svg[solar-lightning-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17.94 17.636c-.078.769-.251 1.286-.643 1.672C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v1.182M12 20v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l-1.5 2h3L12 16"></svg:path><svg:path stroke-linecap="round" d="M11 5h2"></svg:path><svg:path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8"></svg:path></svg:g>`,
})
export class SolarLightningBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningLineDuotoneIcon],svg[solar-lightning-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h2.4M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4"></svg:path><svg:path stroke-linecap="round" d="M12 20v2" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l-1.5 2h3L12 16" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11 5h2" opacity=".5"></svg:path><svg:path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8"></svg:path></svg:g>`,
})
export class SolarLightningLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningLinearIcon],svg[solar-lightning-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h2.4M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4m1.2 0v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l-1.5 2h3L12 16"></svg:path><svg:path stroke-linecap="round" d="M11 5h2"></svg:path><svg:path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8"></svg:path></svg:g>`,
})
export class SolarLightningLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningOutlineIcon],svg[solar-lightning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m2.35 7.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.962 1.25c-.67 0-1.229 0-1.681.046c-.473.048-.913.153-1.309.417a2.8 2.8 0 0 0-.759.76c-.264.395-.369.835-.417 1.308c-.046.452-.046 1.011-.046 1.68v1.933c-.603.115-1.135.332-1.573.764c-.516.508-.733 1.145-.832 1.874c-.095.695-.095 1.573-.095 2.641v2.654c0 1.068 0 1.946.095 2.64c.1.73.316 1.367.832 1.875c.514.507 1.156.718 1.891.815c.703.093 1.593.093 2.68.093h.502V22a.75.75 0 0 0 1.5 0v-1.25h.503c1.086 0 1.976 0 2.679-.093c.735-.097 1.377-.308 1.891-.815c.516-.508.733-1.145.832-1.874c.095-.695.095-1.573.095-2.641v-2.654c0-1.068 0-1.946-.095-2.64c-.1-.73-.316-1.367-.832-1.875c-.439-.432-.97-.65-1.573-.764V5.462c0-.67 0-1.229-.046-1.681c-.048-.473-.153-.913-.418-1.309a2.8 2.8 0 0 0-.758-.759c-.396-.264-.835-.369-1.309-.417c-.452-.046-1.011-.046-1.68-.046zm2.788 6.012V5.5c0-.718 0-1.2-.038-1.567c-.036-.355-.1-.519-.173-.627a1.3 1.3 0 0 0-.344-.345c-.109-.073-.273-.137-.628-.173c-.367-.037-.85-.038-1.567-.038c-.718 0-1.2 0-1.567.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567v1.762c.45-.012.948-.012 1.497-.012h2.506c.549 0 1.047 0 1.497.012m.985 11.908c-.593.078-1.383.08-2.535.08h-2.4c-1.152 0-1.942-.002-2.535-.08c-.572-.076-.847-.211-1.036-.397c-.187-.184-.322-.45-.398-1.008c-.08-.581-.081-1.357-.081-2.492v-2.546c0-1.136.002-1.91.081-2.492c.076-.558.211-.824.398-1.008c.189-.186.464-.321 1.036-.397c.593-.078 1.383-.08 2.535-.08h2.4c1.152 0 1.942.002 2.535.08c.573.076.847.211 1.036.397c.187.184.322.45.398 1.008c.08.581.081 1.357.081 2.492v2.546c0 1.136-.002 1.91-.081 2.492c-.076.558-.211.824-.398 1.008c-.189.186-.463.321-1.036.397" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeBoldIcon],svg[solar-like-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd"></svg:path>`,
})
export class SolarLikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeBoldDuotoneIcon],svg[solar-like-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.093-1.137l-.145-.047a1.35 1.35 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24a1.67 1.67 0 0 0-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarLikeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeBrokenIcon],svg[solar-like-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zM3.971 21.471l-.748.064zM3 10.234l.747-.064a.75.75 0 0 0-1.497.064zm17.236 1.823l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.589-1.662zm-.863.313a.52.52 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zM4.719 21.406L3.747 10.17l-1.494.129l.971 11.236zm-.969.107V10.234h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zM14.735 5.343a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237zm9.105-12.105a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"></svg:path>`,
})
export class SolarLikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeLineDuotoneIcon],svg[solar-like-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.59-1.662zm-.863.313a.51.51 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"></svg:path><svg:path fill="currentColor" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity=".5"></svg:path>`,
})
export class SolarLikeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeLinearIcon],svg[solar-like-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zM3.971 21.471l-.748.064zM3 10.234l.747-.064a.75.75 0 0 0-1.497.064zm17.236 1.823l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.589-1.662zm-.863.313a.52.52 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zM4.719 21.406L3.747 10.17l-1.494.129l.971 11.236zm-.969.107V10.234h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zM14.735 5.343a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237zm9.105-12.105a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"></svg:path>`,
})
export class SolarLikeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeOutlineIcon],svg[solar-like-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.438 2.778a.6.6 0 0 0-.438.03a.52.52 0 0 0-.28.33l-.476 1.834a8.4 8.4 0 0 1-.72 1.844c-.485.907-1.218 1.604-1.898 2.19l-1.438 1.24a.92.92 0 0 0-.315.774l.812 9.393a.916.916 0 0 0 .911.837h4.649c3.136 0 5.779-2.182 6.286-5.113l.705-4.08a.916.916 0 0 0-.901-1.073h-5.181c-.977 0-1.72-.876-1.562-1.84l.663-4.044a4 4 0 0 0-.076-1.664a.89.89 0 0 0-.596-.611zl.23-.714zm-1.09-1.321a2.1 2.1 0 0 1 1.549-.107l.145.047l-.23.714l.23-.714c.777.25 1.383.87 1.589 1.662c.193.746.229 1.524.104 2.284l-.663 4.044a.083.083 0 0 0 .082.097h5.18c1.5 0 2.636 1.352 2.38 2.829l-.705 4.08c-.638 3.688-3.938 6.357-7.764 6.357H8.596a2.416 2.416 0 0 1-2.405-2.208l-.813-9.393a2.42 2.42 0 0 1 .83-2.04l1.44-1.24c.655-.564 1.206-1.111 1.552-1.76a6.8 6.8 0 0 0 .592-1.514l.476-1.833a2.01 2.01 0 0 1 1.08-1.305m-8.38 8.028a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLikeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBoldIcon],svg[solar-link-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"></svg:path><svg:path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"></svg:path>`,
})
export class SolarLinkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBoldDuotoneIcon],svg[solar-link-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304c1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72z"></svg:path><svg:path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304c-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837" opacity=".5"></svg:path>`,
})
export class SolarLinkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenIcon],svg[solar-link-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305s1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"></svg:path><svg:path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305s-1.37-4.1.303-5.78l2.424-2.433"></svg:path></svg:g>`,
})
export class SolarLinkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenBoldIcon],svg[solar-link-broken-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 0 1-1.05-1.071l3.7-3.625c1.836-1.799 4.914-1.393 6.865.518c1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625M6.624 3.584a.75.75 0 1 0-1.248.832l2 3a.75.75 0 0 0 1.248-.832zM2.237 7.289a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423zm4.491 5.217a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081c1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1.001 1.095-2.963 1.065-4.44-.552c-1.49-1.628-1.564-3.9-.505-5.058z"></svg:path>`,
})
export class SolarLinkBrokenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenBoldDuotoneIcon],svg[solar-link-broken-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 1 1-1.05-1.071l3.7-3.625c1.837-1.799 4.914-1.393 6.865.518c1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625M6.728 12.506a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081c1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1 1.095-2.963 1.065-4.44-.552c-1.49-1.628-1.564-3.9-.505-5.058z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.624 3.584a.75.75 0 0 0-1.248.832l2 3a.75.75 0 1 0 1.248-.832zM2.237 7.288a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423z"></svg:path>`,
})
export class SolarLinkBrokenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenBrokenIcon],svg[solar-link-broken-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 8l6 2M6 4l2 3m3-.437l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517M18.135 12l2.908-2.848c.59-.578.902-1.338.95-2.152M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552c-1.67-1.828-1.897-4.546-.504-6.07L6.173 12"></svg:path>`,
})
export class SolarLinkBrokenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenLineDuotoneIcon],svg[solar-link-broken-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2 8l6 2M6 4l2 3"></svg:path><svg:path d="m11 6.563l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517c1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552c-1.67-1.828-1.897-4.546-.504-6.07L6.173 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkBrokenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenLinearIcon],svg[solar-link-broken-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 8l6 2M6 4l2 3m3-.437l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517c1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552c-1.67-1.828-1.897-4.546-.504-6.07L6.173 12"></svg:path>`,
})
export class SolarLinkBrokenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBoldIcon],svg[solar-link-broken-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89m.941-7L7.5 5.205m-3.998.882L9.05 8.795"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBoldDuotoneIcon],svg[solar-link-broken-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.688 4.158c-2.72-2.544-7.112-2.544-9.833 0l-.367.343a.75.75 0 0 0 1.024 1.096l.367-.344c2.144-2.004 5.64-2.004 7.784 0c2.116 1.978 2.116 5.163 0 7.14l-2.202 2.06a.75.75 0 0 0 1.025 1.095l2.202-2.059c2.75-2.57 2.75-6.76 0-9.331M6.172 10.535a.75.75 0 1 0-1.052-1.07l-.905.89c-2.672 2.628-2.6 6.854.099 9.435c2.707 2.59 7.122 2.627 9.839.03l.365-.35a.75.75 0 0 0-1.036-1.084l-.366.35c-2.127 2.034-5.629 2.013-7.766-.03c-2.097-2.006-2.14-5.258-.083-7.281z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.28 2.713a.75.75 0 1 0-1.386.574l.913 2.205a.75.75 0 0 0 1.386-.574zm-3.449 2.7a.75.75 0 1 0-.658 1.348l5.548 2.707a.75.75 0 0 0 .658-1.348z"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBrokenIcon],svg[solar-link-broken-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0M16.974 15l2.202-2.059c1.168-1.092 1.775-2.51 1.821-3.941M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89m.941-7L7.5 5.205m-3.998.882L9.05 8.795"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticLineDuotoneIcon],svg[solar-link-broken-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89" opacity=".5"></svg:path><svg:path d="M6.587 3L7.5 5.205m-3.998.882L9.05 8.795"></svg:path></svg:g>`,
})
export class SolarLinkBrokenMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticLinearIcon],svg[solar-link-broken-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89m.941-7L7.5 5.205m-3.998.882L9.05 8.795"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticOutlineIcon],svg[solar-link-broken-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.3 2.307a.75.75 0 0 1 .98.406l.913 2.205a.75.75 0 0 1-1.386.574l-.913-2.205a.75.75 0 0 1 .407-.98m13.387 1.851c-2.72-2.544-7.112-2.544-9.833 0l-.367.343a.75.75 0 0 0 1.024 1.096l.367-.344c2.144-2.004 5.64-2.004 7.784 0c2.116 1.978 2.116 5.163 0 7.14l-2.202 2.06a.75.75 0 0 0 1.025 1.095l2.202-2.06c2.75-2.57 2.75-6.76 0-9.33M6.172 10.535a.75.75 0 0 0-1.052-1.07l-.905.89c-2.672 2.628-2.6 6.854.099 9.435c2.707 2.59 7.122 2.627 9.839.03l.365-.35a.75.75 0 0 0-1.036-1.084l-.366.35c-2.127 2.034-5.629 2.013-7.766-.03c-2.097-2.006-2.14-5.258-.083-7.281zM3.831 5.413a.75.75 0 1 0-.658 1.348l5.548 2.707A.75.75 0 0 0 9.38 8.12z"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenOutlineIcon],svg[solar-link-broken-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 0 1-1.05-1.071l3.7-3.625c1.836-1.799 4.914-1.393 6.865.518c1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625M6.624 3.584a.75.75 0 1 0-1.248.832l2 3a.75.75 0 0 0 1.248-.832zM2.237 7.289a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423zm4.491 5.217a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081c1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1.001 1.095-2.963 1.065-4.44-.552c-1.49-1.628-1.564-3.9-.505-5.058z"></svg:path>`,
})
export class SolarLinkBrokenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBoldIcon],svg[solar-link-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5M17.75 12a3.25 3.25 0 0 1-3.25 3.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0a3.25 3.25 0 0 1 6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBoldDuotoneIcon],svg[solar-link-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M17.75 12a3.25 3.25 0 0 1-3.25 3.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0a3.25 3.25 0 0 1 6.5 0"></svg:path>`,
})
export class SolarLinkCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBrokenIcon],svg[solar-link-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 0 1 6-6m0 12a6 6 0 0 0 5-9.318"></svg:path></svg:g>`,
})
export class SolarLinkCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleLineDuotoneIcon],svg[solar-link-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 1 1 6 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleLinearIcon],svg[solar-link-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 1 1 6 6"></svg:path></svg:g>`,
})
export class SolarLinkCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleOutlineIcon],svg[solar-link-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12C2.75 9.1 5.1 6.75 8 6.75a.75.75 0 0 0 0-1.5A6.75 6.75 0 1 0 14.75 12a.75.75 0 0 0-1.5 0a5.25 5.25 0 1 1-10.5 0"></svg:path><svg:path fill="currentColor" d="M21.25 12c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 0 0 0 1.5A6.75 6.75 0 1 0 9.25 12a.75.75 0 0 0 1.5 0a5.25 5.25 0 1 1 10.5 0"></svg:path>`,
})
export class SolarLinkCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkLineDuotoneIcon],svg[solar-link-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.046 14c-1.506-1.512-1.37-4.1.303-5.779l4.848-4.866c1.673-1.68 4.25-1.816 5.757-.305s1.37 4.1-.303 5.78l-2.424 2.433"></svg:path><svg:path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305s-1.37-4.1.303-5.78l2.424-2.433" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkLinearIcon],svg[solar-link-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.046 14c-1.506-1.512-1.37-4.1.303-5.779l4.848-4.866c1.673-1.68 4.25-1.816 5.757-.305s1.37 4.1-.303 5.78l-2.424 2.433"></svg:path><svg:path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305s-1.37-4.1.303-5.78l2.424-2.433"></svg:path></svg:g>`,
})
export class SolarLinkLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2BoldIcon],svg[solar-link-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarLinkMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2BoldDuotoneIcon],svg[solar-link-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.325-4.326a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarLinkMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2BrokenIcon],svg[solar-link-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37l.72-.72A6.1 6.1 0 0 0 20.998 9"></svg:path>`,
})
export class SolarLinkMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2LineDuotoneIcon],svg[solar-link-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72" opacity=".5"></svg:path><svg:path d="m9.837 14.163l4.326-4.326"></svg:path><svg:path d="m9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2LinearIcon],svg[solar-link-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"></svg:path>`,
})
export class SolarLinkMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2OutlineIcon],svg[solar-link-minimalistic-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarLinkMinimalistic2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticBoldIcon],svg[solar-link-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></svg:path><svg:path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></svg:path>`,
})
export class SolarLinkMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticBoldDuotoneIcon],svg[solar-link-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5zm7-1.5a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarLinkMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticBrokenIcon],svg[solar-link-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 12h6m-6 6H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 6 6m-7 6h1a5.97 5.97 0 0 0 3.318-1"></svg:path>`,
})
export class SolarLinkMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticLineDuotoneIcon],svg[solar-link-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 12h6"></svg:path><svg:path d="M9 18H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticLinearIcon],svg[solar-link-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 12h6m-6 6H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1"></svg:path>`,
})
export class SolarLinkMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticOutlineIcon],svg[solar-link-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></svg:path><svg:path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></svg:path>`,
})
export class SolarLinkMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkOutlineIcon],svg[solar-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"></svg:path><svg:path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"></svg:path>`,
})
export class SolarLinkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBoldIcon],svg[solar-link-round-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 6.309a5.317 5.317 0 0 1 7.522 0a5.326 5.326 0 0 1 0 7.529l-1.43 1.43a.75.75 0 0 0 1.06 1.061l1.43-1.431a6.826 6.826 0 0 0 0-9.65a6.817 6.817 0 0 0-9.644 0l-2.86 2.864A6.826 6.826 0 0 0 6.69 19.749a.75.75 0 1 0 .083-1.498a5.326 5.326 0 0 1-3.465-9.08z"></svg:path><svg:path fill="currentColor" d="M17.31 4.251a.75.75 0 0 0-.083 1.498a5.326 5.326 0 0 1 3.465 9.08L17.83 17.69a5.317 5.317 0 0 1-7.523 0a5.326 5.326 0 0 1 0-7.528l1.43-1.432a.75.75 0 0 0-1.06-1.06l-1.43 1.431a6.826 6.826 0 0 0 0 9.65a6.817 6.817 0 0 0 9.644 0l2.86-2.864A6.826 6.826 0 0 0 17.31 4.251"></svg:path>`,
})
export class SolarLinkRoundAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBoldDuotoneIcon],svg[solar-link-round-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.277 7.934a6.75 6.75 0 0 0 4.397 11.513a.75.75 0 0 0 .083-1.498a5.25 5.25 0 0 1-3.42-8.954l2.829-2.829a5.25 5.25 0 1 1 7.425 7.425l-1.415 1.414a.75.75 0 1 0 1.061 1.06l1.414-1.413a6.75 6.75 0 0 0-9.546-9.546z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.409 17.834a5.25 5.25 0 0 1 0-7.425l1.414-1.414a.75.75 0 1 0-1.06-1.06L9.347 9.347a6.75 6.75 0 1 0 9.546 9.546l2.829-2.828a6.75 6.75 0 0 0-4.398-11.513a.75.75 0 0 0-.083 1.498a5.25 5.25 0 0 1 3.42 8.954l-2.829 2.829a5.25 5.25 0 0 1-7.424 0" opacity=".5"></svg:path>`,
})
export class SolarLinkRoundAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBrokenIcon],svg[solar-link-round-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.792 15.8l1.43-1.432a6.076 6.076 0 0 0 0-8.59a6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"></svg:path><svg:path d="M21.222 15.358A6.076 6.076 0 0 0 17.268 5m1.093 13.221a6.067 6.067 0 0 1-8.583 0a6.076 6.076 0 0 1 0-8.589l1.43-1.431"></svg:path></svg:g>`,
})
export class SolarLinkRoundAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleLineDuotoneIcon],svg[solar-link-round-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.792 15.8l1.43-1.432a6.076 6.076 0 0 0 0-8.59a6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"></svg:path><svg:path d="m11.208 8.2l-1.43 1.432a6.076 6.076 0 0 0 0 8.59a6.067 6.067 0 0 0 8.583 0l2.861-2.864A6.076 6.076 0 0 0 17.268 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkRoundAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleLinearIcon],svg[solar-link-round-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.792 15.8l1.43-1.432a6.076 6.076 0 0 0 0-8.59a6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"></svg:path><svg:path d="m11.208 8.2l-1.43 1.432a6.076 6.076 0 0 0 0 8.59a6.067 6.067 0 0 0 8.583 0l2.861-2.864A6.076 6.076 0 0 0 17.268 5"></svg:path></svg:g>`,
})
export class SolarLinkRoundAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleOutlineIcon],svg[solar-link-round-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 6.309a5.317 5.317 0 0 1 7.522 0a5.326 5.326 0 0 1 0 7.529l-1.43 1.43a.75.75 0 0 0 1.06 1.061l1.43-1.431a6.826 6.826 0 0 0 0-9.65a6.817 6.817 0 0 0-9.644 0l-2.86 2.864A6.826 6.826 0 0 0 6.69 19.749a.75.75 0 1 0 .083-1.498a5.326 5.326 0 0 1-3.465-9.08z"></svg:path><svg:path fill="currentColor" d="M17.31 4.251a.75.75 0 0 0-.083 1.498a5.326 5.326 0 0 1 3.465 9.08L17.83 17.69a5.317 5.317 0 0 1-7.523 0a5.326 5.326 0 0 1 0-7.528l1.43-1.432a.75.75 0 0 0-1.06-1.06l-1.43 1.431a6.826 6.826 0 0 0 0 9.65a6.817 6.817 0 0 0 9.644 0l2.86-2.864A6.826 6.826 0 0 0 17.31 4.251"></svg:path>`,
})
export class SolarLinkRoundAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundBoldIcon],svg[solar-link-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75a.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75a.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundBoldDuotoneIcon],svg[solar-link-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25a.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15" opacity=".5"></svg:path>`,
})
export class SolarLinkRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundBrokenIcon],svg[solar-link-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M16 21a6 6 0 0 0 4.472-10M12 21a6 6 0 0 1 0-12h2"></svg:path>`,
})
export class SolarLinkRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundLineDuotoneIcon],svg[solar-link-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10" opacity=".5"></svg:path><svg:path d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10"></svg:path></svg:g>`,
})
export class SolarLinkRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundLinearIcon],svg[solar-link-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10"></svg:path>`,
})
export class SolarLinkRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundOutlineIcon],svg[solar-link-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75a.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75a.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareBoldIcon],svg[solar-link-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M9.198 7.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C6.003 10.388 6 11.036 6 12s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08m7.647 1.567c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareBoldDuotoneIcon],svg[solar-link-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.198 7.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C6.003 10.388 6 11.036 6 12s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08"></svg:path><svg:path fill="currentColor" d="M16.845 8.817c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3"></svg:path>`,
})
export class SolarLinkSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareBrokenIcon],svg[solar-link-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></svg:path><svg:path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879c.3-.3.498-.662.628-1.121M22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6"></svg:path></svg:g>`,
})
export class SolarLinkSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareLineDuotoneIcon],svg[solar-link-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></svg:path><svg:path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareLinearIcon],svg[solar-link-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></svg:path><svg:path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6"></svg:path></svg:g>`,
})
export class SolarLinkSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareOutlineIcon],svg[solar-link-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.945 5.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116H8a.75.75 0 0 0 0-1.5c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191s.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556C5.562 6.752 6.564 6.75 8 6.75s2.437.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191a.75.75 0 0 0 1.5 0v-.055c0-1.367 0-2.47-.117-3.337c-.12-.9-.38-1.658-.981-2.26c-.602-.602-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z"></svg:path><svg:path fill="currentColor" d="M16 6.75c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191s-.002 2.437-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103s-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117H16a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class SolarLinkSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBoldIcon],svg[solar-list-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m15.25-.75a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75M2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBoldDuotoneIcon],svg[solar-list-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.5 13.25a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarListArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBrokenIcon],svg[solar-list-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownLineDuotoneIcon],svg[solar-list-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownLinearIcon],svg[solar-list-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3"></svg:path></svg:g>`,
})
export class SolarListArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBoldIcon],svg[solar-list-arrow-down-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72 1.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowDownMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBoldDuotoneIcon],svg[solar-list-arrow-down-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path><svg:path d="M16.97 17.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBrokenIcon],svg[solar-list-arrow-down-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 16H3m9-5H3"></svg:path><svg:path stroke-linejoin="round" d="m15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticLineDuotoneIcon],svg[solar-list-arrow-down-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 10H3m9-5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticLinearIcon],svg[solar-list-arrow-down-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 10H3m9-5H3"></svg:path><svg:path stroke-linejoin="round" d="m15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticOutlineIcon],svg[solar-list-arrow-down-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6M17.5 8.25a.75.75 0 0 1 .75.75v6.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V9a.75.75 0 0 1 .75-.75M2.25 11a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowDownMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownOutlineIcon],svg[solar-list-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 4A.75.75 0 0 1 3 8.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m15.25-.75a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V13a.75.75 0 0 1 .75-.75M2.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpBoldIcon],svg[solar-list-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpBoldDuotoneIcon],svg[solar-list-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.97 13.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"></svg:path>`,
})
export class SolarListArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpBrokenIcon],svg[solar-list-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 14H3m8 4H3"></svg:path><svg:path stroke-linejoin="round" d="M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpLineDuotoneIcon],svg[solar-list-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6"></svg:path></svg:g>`,
})
export class SolarListArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpLinearIcon],svg[solar-list-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3"></svg:path><svg:path stroke-linejoin="round" d="M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6"></svg:path></svg:g>`,
})
export class SolarListArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBoldIcon],svg[solar-list-arrow-up-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m14.72 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowUpMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBoldDuotoneIcon],svg[solar-list-arrow-up-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.97 8.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"></svg:path>`,
})
export class SolarListArrowUpMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBrokenIcon],svg[solar-list-arrow-up-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 11H3m9 5H3"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path><svg:path d="M20 6H9.5M3 6h2.25"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticLineDuotoneIcon],svg[solar-list-arrow-up-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m9 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticLinearIcon],svg[solar-list-arrow-up-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m9 5H3"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticOutlineIcon],svg[solar-list-arrow-up-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m14.72 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowUpMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpOutlineIcon],svg[solar-list-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListBoldIcon],svg[solar-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListBoldDuotoneIcon],svg[solar-list-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.25 12a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" opacity=".7"></svg:path><svg:path fill="currentColor" d="M3.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" opacity=".4"></svg:path>`,
})
export class SolarListBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListBrokenIcon],svg[solar-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m11 5H4m5 5H4"></svg:path>`,
})
export class SolarListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckBoldIcon],svg[solar-list-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.75A.75.75 0 0 1 2.75 5h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 5.75m0 4A.75.75 0 0 1 2.75 9h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 9.75m18.211 2.909a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M2 13.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckBoldDuotoneIcon],svg[solar-list-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.75A.75.75 0 0 1 2.75 5h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 5.75m0 4A.75.75 0 0 1 2.75 9h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 9.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.211 12.659a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 0 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13"></svg:path>`,
})
export class SolarListCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckBrokenIcon],svg[solar-list-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16l2.1 2.5l3.9-5"></svg:path><svg:path d="M10 14H3m7 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckLineDuotoneIcon],svg[solar-list-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16l2.1 2.5l3.9-5"></svg:path><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckLinearIcon],svg[solar-list-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16l2.1 2.5l3.9-5"></svg:path><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3"></svg:path></svg:g>`,
})
export class SolarListCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticBoldIcon],svg[solar-list-check-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 3 6.75m18.211 4.409a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M3 11.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCheckMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticBoldDuotoneIcon],svg[solar-list-check-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 3 6.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.211 11.159a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 0 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13"></svg:path>`,
})
export class SolarListCheckMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticBrokenIcon],svg[solar-list-check-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 11H3m7 5H3"></svg:path><svg:path stroke-linejoin="round" d="m14 13.5l2.1 2.5l3.9-5"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListCheckMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticLineDuotoneIcon],svg[solar-list-check-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m7 5H3m7 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 13.5l2.1 2.5l3.9-5"></svg:path></svg:g>`,
})
export class SolarListCheckMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticLinearIcon],svg[solar-list-check-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m7 5H3m7 5H3"></svg:path><svg:path stroke-linejoin="round" d="m14 13.5l2.1 2.5l3.9-5"></svg:path></svg:g>`,
})
export class SolarListCheckMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticOutlineIcon],svg[solar-list-check-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m18.211 4.409a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M2.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCheckMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckOutlineIcon],svg[solar-list-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m18.211 2.909a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M2.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossBoldIcon],svg[solar-list-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22 2.97a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossBoldDuotoneIcon],svg[solar-list-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.47 12.97a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarListCrossBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossBrokenIcon],svg[solar-list-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 18.5l5-5m0 5l-5-5"></svg:path><svg:path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossLineDuotoneIcon],svg[solar-list-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 18.5l5-5m0 5l-5-5"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossLinearIcon],svg[solar-list-cross-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 18.5l5-5m0 5l-5-5"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3"></svg:path></svg:g>`,
})
export class SolarListCrossLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBoldIcon],svg[solar-list-cross-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22-.53a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCrossMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBoldDuotoneIcon],svg[solar-list-cross-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.47 10.47a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97l-1.97-1.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarListCrossMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBrokenIcon],svg[solar-list-cross-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 6h10.5M20 6h-2.25M11 16H3"></svg:path><svg:path stroke-linejoin="round" d="m15 16l5-5m0 5l-5-5"></svg:path><svg:path d="M11 11H7m-4 0h1.2"></svg:path></svg:g>`,
})
export class SolarListCrossMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticLineDuotoneIcon],svg[solar-list-cross-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m8 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m15 16l5-5m0 5l-5-5"></svg:path></svg:g>`,
})
export class SolarListCrossMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticLinearIcon],svg[solar-list-cross-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m8 5H3"></svg:path><svg:path stroke-linejoin="round" d="m15 16l5-5m0 5l-5-5"></svg:path></svg:g>`,
})
export class SolarListCrossMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticOutlineIcon],svg[solar-list-cross-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22-.53a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCrossMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossOutlineIcon],svg[solar-list-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22 2.97a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownBoldIcon],svg[solar-list-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.18.512a.75.75 0 0 1 1.058-.081l3.012 2.581l3.012-2.581a.75.75 0 1 1 .976 1.138l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.057M2.25 18a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownBoldDuotoneIcon],svg[solar-list-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.43 14.512a.75.75 0 0 1 1.058-.081l3.012 2.581l3.012-2.581a.75.75 0 1 1 .976 1.139l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.058"></svg:path>`,
})
export class SolarListDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownBrokenIcon],svg[solar-list-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 14H3m7 4H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path><svg:path d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownLineDuotoneIcon],svg[solar-list-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path></svg:g>`,
})
export class SolarListDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownLinearIcon],svg[solar-list-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path></svg:g>`,
})
export class SolarListDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBoldIcon],svg[solar-list-down-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.762 2.57c.28.24.695.24.976 0l3.5-3a.75.75 0 1 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarListDownMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBoldDuotoneIcon],svg[solar-list-down-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path><svg:path d="M17.012 18.57c.28.24.695.24.976 0l3.5-3a.75.75 0 0 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.139z"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBrokenIcon],svg[solar-list-down-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 16H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path><svg:path d="M20 11H3m0-5h10.5M20 6h-2.25"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticLineDuotoneIcon],svg[solar-list-down-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m17 5H3m7 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticLinearIcon],svg[solar-list-down-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m17 5H3m7 5H3"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticOutlineIcon],svg[solar-list-down-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.18 3.512a.75.75 0 0 1 1.058-.081l3.012 2.581l3.012-2.581a.75.75 0 1 1 .976 1.138l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.057M2.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListDownMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownOutlineIcon],svg[solar-list-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.18.512a.75.75 0 0 1 1.058-.081l3.012 2.581l3.012-2.581a.75.75 0 1 1 .976 1.138l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.057M2.25 18a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartBoldIcon],svg[solar-list-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305c.435.32.652.48.98.48s.545-.16.98-.48c1.035-.762 2.52-2.07 2.52-3.305c0-2.008-1.925-2.757-3.5-1.206c-1.575-1.551-3.5-.802-3.5 1.206"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartBoldDuotoneIcon],svg[solar-list-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305c.435.32.652.48.98.48s.545-.16.98-.48c1.035-.762 2.52-2.07 2.52-3.305c0-2.008-1.925-2.757-3.5-1.206c-1.575-1.551-3.5-.802-3.5 1.206"></svg:path>`,
})
export class SolarListHeartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartBrokenIcon],svg[solar-list-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.52 18.34l-.444.605zm.98-4.51l-.526.534a.75.75 0 0 0 1.052 0zm.98 4.51l-.445-.603zm-.98.48v.75zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363c-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322c.552.636 1.232 1.19 1.77 1.587zm-2.215-2.7c0-.757.343-1.118.664-1.233c.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902c-1.035.373-1.655 1.392-1.655 2.643zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587c.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338c-.45.517-1.03.997-1.527 1.363zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643c-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56c.321.115.664.476.664 1.232zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4 4 0 0 1-.438-.302zm1.96-1.208a4 4 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 14H3m7 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarListHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartLineDuotoneIcon],svg[solar-list-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.52 18.34l-.444.605zm.98-4.51l-.526.534a.75.75 0 0 0 1.052 0zm.98 4.51l-.445-.603zm-.98.48v.75zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363c-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322c.552.636 1.232 1.19 1.77 1.587zm-2.215-2.7c0-.757.343-1.118.664-1.233c.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902c-1.035.373-1.655 1.392-1.655 2.643zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587c.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338c-.45.517-1.03.997-1.527 1.363zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643c-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56c.321.115.664.476.664 1.232zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4 4 0 0 1-.438-.302zm1.96-1.208a4 4 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartLinearIcon],svg[solar-list-heart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.52 18.34l-.444.605zm.98-4.51l-.526.534a.75.75 0 0 0 1.052 0zm.98 4.51l-.445-.603zm-.98.48v.75zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363c-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322c.552.636 1.232 1.19 1.77 1.587zm-2.215-2.7c0-.757.343-1.118.664-1.233c.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902c-1.035.373-1.655 1.392-1.655 2.643zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587c.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338c-.45.517-1.03.997-1.527 1.363zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643c-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56c.321.115.664.476.664 1.232zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4 4 0 0 1-.438-.302zm1.96-1.208a4 4 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 6H3m18 4H3m7 4H3m7 4H3"></svg:path></svg:g>`,
})
export class SolarListHeartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
